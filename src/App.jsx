import React from "react";
import "./index.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Aipage from "./Aipage";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-5">
        <h1 className="text-xl font-bold">AI Companion</h1>

        <ul className="flex gap-6 text-gray-300">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">FAQ</li>
          <li className="hover:text-white cursor-pointer">Help</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* HERO */}
      <div className="text-center mt-16 px-5">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Your AI Companion
        </h1>

        <p className="text-gray-400 text-lg mb-6">
          Study smarter. Understand deeper. Explore faster.
        </p>

        <button
          onClick={() => navigate("/ai")}
          className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Launch AI
        </button>
      </div>

      {/* FEATURES */}
      <section className="px-16 mt-10">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          What Your AI Can Do
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg">Summarize Notes</h3>
            <p className="text-gray-400 text-sm">
              Turn long study material into short, clear summaries instantly.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Explain Concepts</h3>
            <p className="text-gray-400 text-sm">
              Break down difficult topics into simple explanations.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Break Down Topics</h3>
            <p className="text-gray-400 text-sm">
              Understand concepts step by step.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Generate Questions</h3>
            <p className="text-gray-400 text-sm">
              Create quizzes and practice questions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Study Plans</h3>
            <p className="text-gray-400 text-sm">
              Get personalized plans.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Flashcards</h3>
            <p className="text-gray-400 text-sm">
              Convert notes into flashcards.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Documentation</h3>
            <p className="text-gray-400 text-sm">
              Organize your study material.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Academic Help</h3>
            <p className="text-gray-400 text-sm">
              Get answers instantly.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Companion Mode</h3>
            <p className="text-gray-400 text-sm">
              Chat, jokes, advice, stories.
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <div className="text-center mt-24 mb-12 px-6">
        <p className="text-2xl italic text-gray-300 max-w-xl mx-auto leading-relaxed">
          “Somewhere between a question and an answer… is understanding.
          <br />
          Helping you learn, think, and grow.”
        </p>

        <p className="mt-6 text-sm text-gray-500 tracking-wide">
          ~ Likitha
        </p>
      </div>

    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ai" element={<Aipage />} />
    </Routes>
  );
}

export default App