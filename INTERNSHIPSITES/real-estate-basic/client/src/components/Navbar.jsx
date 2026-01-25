
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <h2>Real Estate</h2>
      <Link to="/">Home</Link> | <Link to="/listings">Listings</Link>
    </nav>
  );
}
