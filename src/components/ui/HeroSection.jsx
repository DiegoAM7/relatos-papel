import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">01 — OTOÑO 2026</p>
          <h1 id="hero-title" className="hero__title">
            Una librería para
            <br />
            lectores
            <em> pacientes</em>.
          </h1>
          <p className="hero__lead">
            Curaduría editorial entre papel y pantalla. Tirajes limitados,
            ediciones digitales cuidadas y autores que se merecen una segunda
            tarde.
          </p>
          <Link to="/home" className="btn btn--primary">
            Explorar catálogo
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
        <figure className="hero__media">
          <img
            src="https://picsum.photos/seed/relatos-hero/900/1200"
            alt=""
            loading="eager"
          />
          <figcaption>
            <span>Portada del mes</span>
            <span>Geografía del silencio · Mariana Coll</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;
