import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const BookCard = ({ book, index = 0 }) => {
  return (
    <Link
      to={`/book/${book.id}`}
      className="book-card"
      style={{ "--i": index }}
      aria-label={`${book.title} de ${book.author}`}
    >
      <div className="book-card__media">
        <span className="book-card__format">{book.format}</span>
        <img src={book.image} alt="" loading="lazy" />
      </div>
      <div className="book-card__body">
        <h3 className="book-card__title">{book.title}</h3>
        <p className="book-card__author">{book.author}</p>
        <div className="book-card__meta">
          <strong className="book-card__price">${book.price.toFixed(2)}</strong>
          <span className="book-card__rating" aria-label={`Rating ${book.rating}`}>
            <Star size={12} strokeWidth={1.5} fill="currentColor" />
            {book.rating.toFixed(1)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
