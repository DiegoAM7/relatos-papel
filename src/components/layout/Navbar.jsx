import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar__content">
        <Link to="/" className="brand">
          Relatos de Papel
        </Link>
        <nav className="navbar__links">
          <Link to="/home">Catalogo</Link>
          <Link to="/login">Ingresar</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;