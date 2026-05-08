import {useMemo, useState} from "react";
import BookGrid from "../components/books/BookGrid.jsx";
import {books} from "../mocks/books.js";
import SearchBar from "../components/ui/SearchBar.jsx";

const HomePage = () => {
    const [search, setSearch] = useState("");

    const filteredBooks = useMemo(() => {
        const normalized = search.toLowerCase().trim();

        if (!normalized) {
            return books;
        }

        return books.filter(book => book.title.toLowerCase().includes(normalized));
    }, [search])

    return (
        <section>
            <h1>Catalogo</h1>
            <SearchBar value={search} onChange={setSearch}/>
            <BookGrid books={filteredBooks}/>
        </section>
    );
};

export default HomePage;
