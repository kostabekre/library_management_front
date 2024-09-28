import {BookData} from "../bookData.js";
import {ShortAuthorData} from "../../authors/ShortAuthorData.js";

export async function getBooksAsync(uri) {
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