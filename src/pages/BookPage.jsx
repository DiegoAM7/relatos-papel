import { useParams } from "react-router-dom";
import useCart from "../components/context/UseCart";
import { books } from "../mocks/books";

const BookPage = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const book = books.find((item) => item.id === Number(id));

    if (!book) {
        return <p>Libro no encontrado.</p>;
    }

    return (
        <article className="book-detail">
            <img src={book.image} alt={book.title} />
            <div>
                <h1>{book.title}</h1>
                <p>{book.description}</p>
                <p>Categoria: {book.category}</p>
                <p>Rating: {book.rating}</p>
                <strong>${book.price.toFixed(2)}</strong>
                <button type="button" className="btn" onClick={() => addToCart(book)}>
                    Agregar al carrito
                </button>
            </div>
        </article>
    );
};

export default BookPage;
