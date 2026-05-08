import BookGrid from "../components/books/BookGrid.jsx";
import HeroSection from "../components/ui/HeroSection.jsx";
import { books } from "../mocks/books.js";

const MARQUEE_ITEMS = [
  "Tirajes limitados",
  "Edición digital cuidada",
  "Papel de algodón",
  "Curaduría independiente", 
  "Encuadernación artesanal",
  "Envíos en 48h",
  "Lectores pacientes",
  "Selección del mes",
];

const LandingPage = () => {
  const featuredBooks = books.filter((book) => book.featured);
  const recent = books.slice(4, 12);

  return (
    <>
      <HeroSection />

      <section className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
            (item, i) => (
              <span key={i} className="marquee__item">
                {item}
                <em>·</em>
              </span>
            ),
          )}
        </div>
      </section>

      <section className="section section--featured">
        <header className="section__head">
          <p className="eyebrow">01 / Selección del mes</p>
          <h2 className="section__title">Lo que estamos leyendo</h2>
          <p className="section__lead">
            Cuatro libros elegidos por la redacción para empezar la temporada.
          </p>
        </header>
        <BookGrid books={featuredBooks} />
      </section>

      <section className="section section--recent">
        <header className="section__head section__head--row">
          <div>
            <p className="eyebrow">02 / Catálogo reciente</p>
            <h2 className="section__title">Llegadas de otoño</h2>
          </div>
          <a href="/home" className="link-arrow">
            Ver todo
          </a>
        </header>
        <BookGrid books={recent} />
      </section>
    </>
  );
};

export default LandingPage;
