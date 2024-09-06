import {createBookTemplate} from "./createBookTemplate";
import {getImagesAsync} from "./getImagesAsync";
import {getBooksAsync} from "./getBooksAsync";

const bookFetcher = getBooksAsync;

const fetchedBooks = await bookFetcher();

await getImagesAsync(fetchedBooks);

const booksContainer = document.getElementById('books-container');

for(const book of Object.values(fetchedBooks)) {
    booksContainer.innerHTML += createBookTemplate(book);
}