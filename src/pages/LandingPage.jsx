import BookGrid from "../components/books/BookGrid.jsx";
import HeroSection from "../components/ui/HeroSection.jsx";
import {books} from "../mocks/books.js";

const LandingPage = () => {
    const featuredBooks = books.filter(book => book.featured)

    return (
        <>
            <HeroSection/>
            <section>
                <h2>Libros destacados</h2>
                <BookGrid books={featuredBooks}/>
            </section>
        </>
    );
};

export default LandingPage;
