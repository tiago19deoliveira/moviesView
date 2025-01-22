import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt } from "react-icons/bi";
import "../components/css/navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie />
          Catálogo de filmes
        </Link>
      </h2>
      <form>
        <input type="text" placeholder="Buscar um filme " />
        <button type="submit">
          <BiSearchAlt />
          Buscar
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
