import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li className="about">About</li>
        </Link>
        <Link to="/certifications">
          <li className="certifications">Certifications</li>
        </Link>
        <Link to="/projects">
          <li className="projects">Projects</li>
        </Link>
        <Link to="/more">
          <li className="more">More</li>
        </Link>
        <Link to="/contact">
          <li className="contact">Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
