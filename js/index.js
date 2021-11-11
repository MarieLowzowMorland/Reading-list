import { getBooks, removeBook } from "./book-storage.js";
import initFrom from "./book-form.js";
import { booksIcon, bookMissingIcon } from "./icons.js"

const setReadingList = (html) => document.getElementById("myReadingList").innerHTML = html;

const productsToHtmlList = (books) => `<ul>${books.map(productToHtml).join("")}</ul>`;

const productToHtml = (book) => {
    const { title, isbn, inMyPossesion } = book;
    const icon = inMyPossesion ? booksIcon : bookMissingIcon;

    return /*template*/`
        <li>
            <h3 class="productTitle">${title} <span class="in-my-possesion-icon">${icon}</span></h3>
            <p class="isbn">Isbn number: ${isbn}</p>
            <button onClick="removeFromList('${isbn}')">Remove from list</button>
        </li>`;
}

const renderBooks = () => {
    const currentBookList = getBooks();
    const htmlToRender = currentBookList.length > 0 ? 
        productsToHtmlList(currentBookList)
        : /*template*/`<p>Benefits of Reading Books:</p>
                        <ul>
                            <li>Strengthens the brain.</li>
                            <li>Increases empathy.</li>
                            <li>Builds vocabulary.</li>
                            <li>Prevents cognitive decline.</li>
                            <li>Reduces stress.</li>
                            <li>Aids sleep.</li>
                            <li>Alleviates depression.</li>
                            <li> Lengthens lifespan.</li>
                        </ul>
                        <p>Maybe you should read a book?</p>`

    setReadingList(htmlToRender);
}

initFrom(renderBooks);
renderBooks();

window.removeFromList = (isbn) => {
    removeBook(isbn);
    renderBooks();
}