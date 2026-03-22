import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { VRM, VRMUtils, VRMLoaderPlugin } from "@pixiv/three-vrm";

function AvatarModel() {
  const group = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const initialized = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.register((parser) => new VRMLoaderPlugin(parser));

    loader.load(
      "/model.vrm",
      (gltf) => {
        const vrm = gltf.userData.vrm;
        if (!vrm) {
          console.error("No VRM found");
          return;
        }


        VRMUtils.removeUnnecessaryJoints(gltf.scene);
        VRMUtils.removeUnnecessaryVertices(gltf.scene);

        if (group.current) {
          group.current.add(vrm.scene);

          vrm.scene.rotation.y = Math.PI;
          vrm.scene.scale.set(1.9, 1.9, 1.9);
          vrm.scene.position.set(0, -2.3, 0);

          // 🔥 PRE-WARM PHYSICS (fix floating hair)
for (let i = 0; i < 20; i++) {
  vrm.update(1 / 60);
}

          console.log("VRM loaded successfully");
          group.current.userData.vrm = vrm;
          initialized.current = true;
        }
      },
      undefined,
      (err) => console.error("VRM load failed:", err)
    );
  }, []);

 useFrame((state, delta) => {
  const vrm = group.current?.userData?.vrm;
  if (!vrm || !vrm.humanoid || !initialized.current) return;

  const t = state.clock.getElapsedTime();

  // Apply relaxed arm pose
  const applyRelaxedArms = () => {
    const bones = {
      leftUpperArm: vrm.humanoid.getNormalizedBoneNode("leftUpperArm"),
      rightUpperArm: vrm.humanoid.getNormalizedBoneNode("rightUpperArm"),
      leftLowerArm: vrm.humanoid.getNormalizedBoneNode("leftLowerArm"),
      rightLowerArm: vrm.humanoid.getNormalizedBoneNode("rightLowerArm"),
      leftHand: vrm.humanoid.getNormalizedBoneNode("leftHand"),
      rightHand: vrm.humanoid.getNormalizedBoneNode("rightHand"),
    };

    if (!bones.leftUpperArm) return;

    bones.leftUpperArm.rotation.set(0.35, 0.25, 0.95);
bones.rightUpperArm.rotation.set(0.35, -0.25, -0.95);

bones.leftLowerArm.rotation.set(-0.10, 0.00, -0.10);
bones.rightLowerArm.rotation.set(-0.10, 0.00, 0.10);

bones.leftHand.rotation.set(0.20, -0.18, 0.30);
bones.rightHand.rotation.set(0.20, 0.18, -0.30);

  };

  // Subtle shoulder tilt
  const leftShoulder = vrm.humanoid.getNormalizedBoneNode("leftShoulder");
  const rightShoulder = vrm.humanoid.getNormalizedBoneNode("rightShoulder");
  if (leftShoulder) leftShoulder.rotation.set(0.02, 0.00, 0.12);
  if (rightShoulder) rightShoulder.rotation.set(0.02, 0.00, -0.12);

  // Head follows mouse – correct direction based on your last test
  const head = vrm.humanoid.getNormalizedBoneNode("head");
  if (head) {
    head.rotation.y = mouse.current.x * 0.6;     // mouse right → look right
    head.rotation.x = mouse.current.y * 0.35;    // mouse top → look up (you said this part is good)
  }

  // Breathing + gentle sway
  vrm.scene.position.y = -2.3 + Math.sin(t * 1.5) * 0.03;
  vrm.scene.rotation.y = Math.PI + Math.sin(t * 0.5) * 0.05;

  // Blinking
  const blinkVal = Math.sin(t * 3) > 0.6 ? 1 : 0;
  vrm.expressionManager?.setValue("blink", blinkVal);

  // Update VRM first
  vrm.update(delta);

  // Override arms/hands last
  applyRelaxedArms();
});

  return <group ref={group} />;
}

export default function Avatar() {
  return (
    <div className="w-full h-full flex items-end justify-center">
      <Canvas camera={{ position: [0, 1.0, 5.0], fov: 50 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[3, 5, 6]} intensity={1.6} />
        <AvatarModel />
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2.6}
          maxPolarAngle={Math.PI / 1.6}
        />
      </Canvas>
    </div>
  );
}