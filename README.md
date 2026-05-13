 Iris AI Buddy 

An AI-powered study companion built for students who want fast answers, focused learning, and a more interactive study experience.

Iris combines a conversational AI assistant with a real-time animated 3D avatar to make studying feel less like opening another tab... and more like having a smart desk partner that never sleeps.

---

## ✨ Features

* 🎓 AI-powered study assistant
* 🧠 Real-time responses using LLaMA 3.3 70B via Groq
* 👩‍💻 Interactive 3D VRM avatar with animations
* 💬 Persistent chat history system
* ⚡ Fast response generation
* 🌐 Fully deployed frontend + backend architecture
* 📱 Responsive modern UI
* 🔄 Dynamic thinking animations while generating responses
* 🗂️ Separate chat sessions and history management

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Three.js
* React Three Fiber
* Tailwind CSS
* Framer Motion

### Backend

* Node.js
* Express.js
* MongoDB

### AI

* Groq API
* LLaMA 3.3 70B

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## 📸 Project Overview

Iris was designed to solve a simple but frustrating problem:

Thousands of students ask questions every day but still struggle to study efficiently because most tools feel robotic, cluttered, or boring.

So instead of building another plain chatbot, Iris was created as a more immersive AI study companion.

The platform combines:

* Conversational AI
* Real-time avatar interaction
* Animated study companion experience
* Persistent memory through chat history

The result feels closer to talking with an intelligent digital study partner than using a traditional assistant.

---

## 🎭 3D Avatar System

One of the core features of Iris is the animated VRM avatar.

Using Three.js, the avatar reacts dynamically during conversations:

* Idle animations while waiting
* Thinking pose during response generation
* Smooth interaction flow
* Real-time visual feedback

This makes the assistant feel more alive and engaging during long study sessions.

---

## ⚙️ How It Works

1. User sends a message
2. Backend receives the request
3. Prompt is sent to Groq API
4. LLaMA 3.3 70B generates a response
5. Response streams back to the frontend
6. Avatar switches animation states in real time
7. Chat is stored in MongoDB for history access

Tiny silicon orchestra. Fast enough to feel conversational ⚡

---

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/iris-ai-buddy.git
cd iris-ai-buddy
```

---

## 📦 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔧 Backend Setup

```bash
cd backend
npm install
npm run server
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend directory.

```env
GROQ_API_KEY=your_groq_api_key
MONGO_URI=your_mongodb_connection
PORT=5000
```

---

## 🌍 Deployment

### Frontend

Deployed using Vercel.

### Backend

Hosted using Render.

---

## 📂 Project Structure

```bash
iris-ai-buddy/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── App.jsx
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── server.js
│
└── README.md
```

---

## 🎯 Future Improvements

* Voice interaction support
* AI-generated study summaries
* PDF/document upload analysis
* Personalized study plans
* Multi-language support
* Emotion-aware avatar reactions
* Group study rooms

---

## 💡 Inspiration

Most educational AI tools focus only on functionality.

Iris focuses on experience too.

The goal was to create something students would actually enjoy opening every day instead of another cold productivity dashboard.

A study assistant with a little personality stitched into the circuitry ✨

---

## 🔗 Live Demo

🌐 iris-ai-buddy.vercel.app

---

## 🤝 Contributing

Contributions, ideas, and feedback are always welcome.

If you'd like to improve Iris:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request




Made for students.
Built by a student.
