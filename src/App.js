import { NavLink } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello React Router v6</h1>
      <h2>simple router example</h2>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        To About
      </NavLink>
    </div>
  );
}
