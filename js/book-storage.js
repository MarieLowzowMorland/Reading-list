const bookStorageKey = "books";

export const getBooks = () => JSON.parse(window.localStorage.getItem(bookStorageKey) || "[]");

export const setBooks = (books) => window.localStorage.setItem(bookStorageKey, JSON.stringify(books));

export const removeBook = (isbn) => {
    const oldList = getBooks();
    const newList = oldList.filter(book => book.isbn !== isbn);
    setBooks(newList);
};

export const addBook = (book) => {
    const oldList = getBooks();
    const newList = [...oldList, book];
    setBooks(newList);
};