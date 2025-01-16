import { NavLink } from "react-router-dom";
import "./styles.css";

export default function About() {
  return (
    <div className="About">
      <h1>About Page</h1>
      <h2>🔖 Write something about the project here</h2>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        To Home
      </NavLink>
    </div>
  );
}
