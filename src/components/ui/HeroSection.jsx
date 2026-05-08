import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="hero-section">
            <h1>Descubre historias inolvidables</h1>
            <p>Tu libreria digital y fisica con seleccion premium.</p>
            <Link to="/home" className="btn">
                Explorar catalogo
            </Link>
        </section>
    );
};

export default HeroSection;