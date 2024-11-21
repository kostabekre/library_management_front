import {fetchBooks} from "./fetchBooks.js";

const uri = "http://127.0.0.1:8080/api/books/all";
await fetchBooks(uri);
