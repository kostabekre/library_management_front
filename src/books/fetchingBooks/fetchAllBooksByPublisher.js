import {fetchBooks} from "./fetchBooks.js";

const publisherId = document.getElementById('publisher-id').value;

const uri = "http://127.0.0.1:8080/api/books/publisher/" + publisherId;

fetchBooks(uri)
