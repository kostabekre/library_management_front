﻿import {BookData} from "../bookData.js";
import {ShortAuthorData} from "../ShortAuthorData.js";

export async function getBooksAsync() {
    const uri = "http://127.0.0.1:8080/api/books/all";
    try {
        const response = await fetch(uri);

        if (!response.ok) {
            console.error(response.statusText);
            return [];
        }

        const json = await response.json();
        let result = {};
        for (let book of json) {
            result[book.bookId] = new BookData(book.bookId, book.name, new ShortAuthorData(book.author));
        }
        return result;
    } catch (error) {
        console.error(error);
        return [];
    }
}