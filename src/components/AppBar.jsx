import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function AppBar() {
  const { user } = useContext(UserContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-link">בית</Link>
        <span className="nav-separator">|</span>
        <Link to="/recipes" className="nav-link">מתכונים</Link>
        <span className="nav-separator">|</span>
        <Link to="/login" className="nav-link">התחברות</Link>
        <span className="nav-separator">|</span>
        <Link to="/add" className="nav-link">➕הוסף מתכון</Link>
        {user && <span className="user-greeting">שלום, {user.name}</span>}
      </div>
    </nav>
  );
}

export default AppBar;
