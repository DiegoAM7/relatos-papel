import { useMemo, useState } from 'react';
import BookGrid from '../components/books/BookGrid';
import CartDrawer from '../components/cart/CartDrawer';
import SearchBar from '../components/ui/SearchBar';
import { books } from '../mocks/books';

const HomePage = () => {
    const [search, setSearch] = useState('');

    const filteredBooks = useMemo(() => {
        const normalized = search.toLowerCase().trim();
        if (!normalized) {
            return books;
        }
        return books.filter(
            (book) =>
                book.title.toLowerCase().includes(normalized) ||
                book.author.toLowerCase().includes(normalized),
        );
    }, [search]);

    return (
        <section>
            <h1>Catalogo</h1>
            <SearchBar value={search} onChange={setSearch} />
            <div className="home-layout">
                <BookGrid books={filteredBooks} />
                <CartDrawer />
            </div>
        </section>
    );
};

export default HomePage;