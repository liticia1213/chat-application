import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import { useState } from "react";

function App() {
  const [token, setToken] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm setToken={setToken} />} />
      </Routes>
    </Router>
  );
}

export default App;
