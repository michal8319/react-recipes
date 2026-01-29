import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext"; // ← ייבוא הקונטקסט

function AppBar() {
  const { user } = useContext(UserContext); // ← קריאה ל-user מה-context

  return (
    <nav style={{ padding: "10px", background: "#f4ecec" }}>
      <Link to="/">בית</Link> |{" "}
      <Link to="/recipes">מתכונים</Link> |{" "}
      <Link to="/login">התחברות</Link>
      {user && <span style={{ marginLeft: "1rem" }}>שלום, {user.name}</span>}
    </nav>
  );
}
export default AppBar;
