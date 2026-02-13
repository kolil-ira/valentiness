import { Routes, Route } from "react-router-dom";
import VaultPage from "./pages/VaultPage";
import RevealPage from "./pages/RevealPage";

function App() {
  return (
    <Routes>
      {/* Start directly at Vault */}
      <Route path="/" element={<VaultPage />} />
      <Route path="/reveal" element={<RevealPage />} />
    </Routes>
  );
}

export default App;
