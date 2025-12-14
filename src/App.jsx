import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import ChatDemo from "./components/ChatDemo.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Hero />
        <Features />
        <ChatDemo />
        <Footer />
      </div>
    </>
  );
}

export default App;
