import {createBookTemplate} from "./createBookTemplate.js";
import {getImagesAsync} from "./getImagesAsync.js";
import {getBooksAsync} from "./getBooksAsync.js";


/**
 *
 * @param uri {string}
 */
export async function fetchBooks(uri) {
    const fetchedBooks = await getBooksAsync(uri);

    const booksContainer = document.getElementById('books-container');

    for(const book of Object.values(fetchedBooks)) {
        booksContainer.innerHTML += createBookTemplate(book);
    }

    getImagesAsync(fetchedBooks);
}
