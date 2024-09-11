import {fetchBooks} from "./fetchBooks.js";

const authorId = document.getElementById('author-id').value;

const uri = "http://127.0.0.1:8080/api/books/author/" + authorId;

fetchBooks(uri)
