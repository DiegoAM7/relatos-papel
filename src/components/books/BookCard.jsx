import { Link } from "react-router-dom";
import useCart from "../../context/useCart";

const BookCard = ({ book }) => {
  const { addToCart } = useCart();

  return (
    <article className="book-card">
      <img src={book.image} alt={book.title} loading="lazy" />
      <div className="book-card__body">
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <strong>${book.price.toFixed(2)}</strong>
      </div>
      <div className="book-card__actions">
        <Link to={`/book/${book.id}`}>Ver detalle</Link>
        <button type="button" onClick={() => addToCart(book)}>
          Agregar
        </button>
      </div>
    </article>
  );
};

export default BookCard;