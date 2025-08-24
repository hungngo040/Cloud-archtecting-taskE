import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/user" style={{ marginRight: "15px" }}>User</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
}

