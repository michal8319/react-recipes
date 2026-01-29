import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // ✅ צריך לייבא
import { UserContext } from "../context/UserContext";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate(); // ✅ יוזר נוויגייט

  function handleSave(e) {
    e.preventDefault(); // מונע רענון עמוד
    if (!name || !email) {
      alert("אנא מלאו שם ומייל");
      return;
    }
      console.log("User saved:", { name, email }); 
    setUser({ name, email });
  }

  return (
    <div className="login-box">
      <h2>התחברות</h2>
      <form onSubmit={handleSave}>
        <input
          type="text"
          placeholder="שם"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="מייל"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
            <button onClick={handleSave}>שמירה</button>
      </form>
    </div>
  );
}

export default Login;
