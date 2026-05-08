export const books = Array.from({ length: 20 }, (_, index) => {
    const id = index + 1;
    return {
        id,
        title: `Relato ${id}`,
        author: `Autor ${id}`,
        description: `Una historia envolvente del libro ${id}, ideal para lectores que disfrutan tramas profundas y personajes memorables.`,
        price: 9.99 + id,
        image: `https://picsum.photos/seed/book-${id}/400/600`,
        category: id % 2 === 0 ? "Ficcion" : "No ficcion",
        stock: 5 + id,
        rating: Number((3.5 + (id % 2) * 0.7).toFixed(1)),
        featured: id <= 4,
    };
});