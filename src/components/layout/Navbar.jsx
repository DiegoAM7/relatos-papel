import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import useAuth from "../../components/hooks/useAuth";
import useCart from "../../components/context/UseCart";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container navbar__content">
        <Link to="/" className="brand" aria-label="Relatos de Papel — inicio">
          Relatos de Papel
        </Link>

        <nav className="navbar__links" aria-label="Principal">
          <Link to="/home">Catálogo</Link>
          <Link to="/profile">Perfil</Link>
          {!isAuthenticated ? (
            <Link to="/login">Ingresar</Link>
          ) : (
            <button type="button" onClick={logout} className="navbar__logout">
              Salir
            </button>
          )}
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="icon-btn"
            aria-label="Buscar"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((v) => !v)}
          >
            {searchOpen ? <X size={18} strokeWidth={1.5} /> : <Search size={18} strokeWidth={1.5} />}
          </button>

          <Link to="/checkout" className="icon-btn icon-btn--cart" aria-label={`Carrito, ${totalItems} artículos`}>
            <ShoppingBag size={18} strokeWidth={1.5} />
            {totalItems > 0 ? <span className="cart-badge">{totalItems}</span> : null}
          </Link>

          <button
            type="button"
            className="icon-btn icon-btn--menu"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <div className={`navbar__search ${searchOpen ? "is-open" : ""}`}>
        <div className="container navbar__search-inner">
          <Search size={18} strokeWidth={1.5} />
          <input
            type="search"
            placeholder="Buscar por título, autor o tema…"
            aria-label="Buscar"
          />
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} role="dialog" aria-modal="true">
        <nav className="mobile-menu__links" aria-label="Mobile">
          <Link to="/">Inicio</Link>
          <Link to="/home">Catálogo</Link>
          <Link to="/profile">Perfil</Link>
          <Link to="/checkout">Carrito ({totalItems})</Link>
          {!isAuthenticated ? (
            <Link to="/login">Ingresar</Link>
          ) : (
            <button type="button" onClick={logout}>Cerrar sesión</button>
          )}
        </nav>
        <p className="mobile-menu__meta">01 — OTOÑO 2026</p>
      </div>
    </header>
  );
};

export default Navbar;
