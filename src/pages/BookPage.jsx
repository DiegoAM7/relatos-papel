import { useParams } from 'react-router-dom';
import { books } from '../mocks/books.js';

const BookPage = () => {
    const { id } = useParams();
    const book = books.find(item => item.id === Number(id));

    if (!book) {
        return <p>Libro no encontrado.</p>
    }

    return (
    <article>
        <img src={book.image} alt={book.title} />
        <div>
            <h1>{book.title}</h1>
            <p>{book.description}</p>
            <p>Categoria: {book.category}</p>
            <p>Rating: {book.rating}</p>
            <strong>{book.price.toFixed(2)}</strong>
        </div>
    </article>
  );
};

export default BookPage;
