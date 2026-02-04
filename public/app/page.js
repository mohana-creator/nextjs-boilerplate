"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "60%", left: "55%" });

  const yesButtonSize = Math.min(noCount * 6 + 18, 42);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    setNoPosition({
      top: `${Math.random() * 70 + 10}%`,
      left: `${Math.random() * 70 + 10}%`,
    });
  };

  const handleYesClick = async () => {
    setYesPressed(true);

    // ✅ Lazy-load confetti (no install required)
    const confetti = (await import("canvas-confetti")).default;
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
    });
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "Have a heart 🥺",
      "Kanna 😢",
      "Pleaseee 💔",
      "You're breaking my heart 💔",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center bg-pink-50 overflow-hidden">
      {yesPressed ? (
        <>
          <img
            className="w-48 mb-4"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Happy bear"
