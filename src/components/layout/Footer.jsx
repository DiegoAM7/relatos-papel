import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__logo">Relatos de Papel</p>
          <p className="footer__tagline">
            Una librería para lectores pacientes.
            <br />
            Selección editorial desde 2018.
          </p>
        </div>

        <div className="footer__cols">
          <div>
            <p className="footer__heading">Catálogo</p>
            <ul>
              <li><Link to="/home">Novedades</Link></li>
              <li><Link to="/home">Ficción</Link></li>
              <li><Link to="/home">Ensayo</Link></li>
              <li><Link to="/home">Poesía</Link></li>
            </ul>
          </div>
          <div>
            <p className="footer__heading">Empresa</p>
            <ul>
              <li><a href="#about">Sobre nosotros</a></li>
              <li><a href="#editorial">Editorial</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
          <div>
            <p className="footer__heading">Legal</p>
            <ul>
              <li><a href="#terms">Términos</a></li>
              <li><a href="#privacy">Privacidad</a></li>
              <li><a href="#cookies">Cookies</a></li>
            </ul>
          </div>
        </div>

        <form
          className="footer__newsletter"
          onSubmit={(event) => event.preventDefault()}
        >
          <p className="footer__heading">Boletín mensual</p>
          <label className="footer__field">
            <input
              type="email"
              placeholder="tu@correo.com"
              aria-label="Correo electrónico"
              required
            />
            <button type="submit">Suscribir</button>
          </label>
        </form>
      </div>

      <div className="container footer__legal">
        <p>© {new Date().getFullYear()} Relatos de Papel. Todos los derechos reservados.</p>
        <p>Hecho con cuidado · Madrid / Bogotá</p>
      </div>
    </footer>
  );
};

export default Footer;
