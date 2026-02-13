import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VaultPage() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  // Hardcoded simple password
  const correctPassword = "1234"; 

  // Hardcoded names
  const yourName = "Ira";
  const partnerName = "Betsyy";

  const handleClick = (char) => {
    if (input.length < 8) {
      setInput(input + char);
    }
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleUnlock = () => {
    if (input === correctPassword) {
      navigate("/reveal");
    } else {
      alert("Wrong password 💔 Try again!");
      setInput("");
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h1>The Vault 🔐</h1>
        <h3>
          {yourName} asks {partnerName} to be my Valentine ❤️
        </h3>

        {/* Display the password on top */}
        <p style={{ margin: "10px 0", fontWeight: "bold", color: "#d63384" }}>
          Password: {correctPassword}
        </p>

        <div className="display">{input}</div>

        <div className="keypad">
          {[1,2,3,4,5,6,7,8,9,0].map((num) => (
            <button key={num} onClick={() => handleClick(num.toString())}>
              {num}
            </button>
          ))}
        </div>

        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleUnlock}>Unlock Gift ❤️</button>
      </div>
    </div>
  );
}
