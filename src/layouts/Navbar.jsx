import { Link } from 'react-router-dom';
import useAuth from '../../context/useAuth';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="navbar">
      <div className="container navbar__content">
        <Link to="/" className="brand">
          Relatos de Papel
        </Link>
        <nav className="navbar__links">
          <Link to="/home">Catalogo</Link>
          <Link to="/profile">Perfil</Link>
          <Link to="/checkout">Checkout</Link>
          {!isAuthenticated ? (
            <Link to="/login">Ingresar</Link>
          ) : (
            <button type="button" onClick={logout} className="link-btn">
              Cerrar sesion
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
