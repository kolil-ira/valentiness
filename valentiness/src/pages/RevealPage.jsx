import { useEffect, useState, useRef } from "react";

export default function RevealPage() {
  const [time, setTime] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const yourName = "Ira";
  const partnerName = "Betsyy";

  const audioRef = useRef(null);

  // Timer for how long you've been together
  useEffect(() => {
    const startDate = new Date(2026, 1, 12); // Feb 12, 2026
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now - startDate;

      const seconds = Math.floor(diff / 1000) % 60;
      const minutes = Math.floor(diff / (1000 * 60)) % 60;
      const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      setTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Floating hearts
  useEffect(() => {
    const container = document.querySelector(".hearts-container");
    const createHeart = () => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = (4 + Math.random() * 4) + "s";
      container.appendChild(heart);
      setTimeout(() => heart.remove(), 8000);
    };
    const interval = setInterval(createHeart, 300);
    return () => clearInterval(interval);
  }, []);

  // Toggle play/pause music
  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="page flex items-center justify-center min-h-screen bg-gradient-to-b from-pink-200 to-red-300 overflow-hidden">
      {/* Floating hearts container */}
      <div className="hearts-container"></div>

      <div className="card bg-white/90 p-8 rounded-2xl shadow-2xl text-center animate-fadeIn">
        <h1 className="text-3xl font-bold mb-2">✨ Valentine Surprise ✨</h1>
        
        {/* New romantic message */}
        <h2 className="text-2xl text-red-600 font-semibold mb-4" style={{ lineHeight: "1.4" }}>
          💌 Hey {partnerName}! 💕 <br />
        { /* /{yourName}’s*/} MY heart is all yours… <br /> 
          Will you be my Valentine? 💖
        </h2>

        <p className="text-pink-700 mb-6 text-lg italic">My heart beats only for you 💓</p>

        <h3 className="text-lg font-medium mb-2">Together for:</h3>
        <h2 className="text-2xl text-red-500 font-bold mb-6 animate-pulse">{time}</h2>

        {/* Background music */}
        <audio ref={audioRef} src="/sautisol.mp3" autoPlay loop />

        {/* Stop/Play Music Button */}
        <button 
          onClick={toggleMusic} 
          style={{
            background: "#ff4d88",
            color: "white",
            padding: "10px 20px",
            borderRadius: "50px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "10px"
          }}
        >
          {isPlaying ? "Stop Music ❌" : "Play Music ▶️"}
        </button>
      </div>
    </div>
  );
}
