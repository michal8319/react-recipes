import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSave(e) {
    e.preventDefault();
    
    if (!name || !email) {
      alert("אנא מלאו שם ומייל");
      return;
    }
    
    if (!email.includes("@")) {
      alert("אנא הזינו כתובת מייל תקינה");
      return;
    }
    
    setUser({ name, email });
    alert(`שלום ${name}! התחברת בהצלחה`);
    navigate("/");
  }

  return (
    <div className="login-box">
      <h2>התחברות</h2>
      <form onSubmit={handleSave}>
        <input
          type="text"
          placeholder="שם מלא"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="כתובת מייל"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">התחבר</button>
      </form>
    </div>
  );
}

export default Login;
