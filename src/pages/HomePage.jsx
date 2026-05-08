import BookGrid from "../components/books/BookGrid.jsx";
import {books} from "../mocks/books.js";

const HomePage = () => {
    return (
        <section>
            <h1>Catalogo</h1>
            <BookGrid books={books}/>
        </section>
    );
};

export default HomePage;
