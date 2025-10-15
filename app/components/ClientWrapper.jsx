"use client";

import { useState, useEffect } from "react";
import Intro from "./Intro";

export default function ClientWrapper({ children }) {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("aurenyx_intro_done");
    if (!hasSeenIntro) {
      setShowIntro(true);
    }
  }, []);

  const handleFinish = () => {
    localStorage.setItem("aurenyx_intro_done", "true");
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <Intro onFinish={handleFinish} />}
      <div
        className={`transition-all duration-700  ${
          showIntro ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
