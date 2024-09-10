import {createBookTemplate} from "./createBookTemplate.js";
import {getImagesAsync} from "./getImagesAsync.js";
import {getBooksAsync} from "./getBooksAsync.js";

const bookFetcher = getBooksAsync;

const fetchedBooks = await bookFetcher();

await getImagesAsync(fetchedBooks);

const booksContainer = document.getElementById('books-container');

for(const book of Object.values(fetchedBooks)) {
    booksContainer.innerHTML += createBookTemplate(book);
}