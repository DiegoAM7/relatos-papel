import BookCard from "./BookCard";

const BookGrid = ({ books }) => {
    return (
        <section className="book-grid">
            {books.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </section>
    );
};

export default BookGrid;