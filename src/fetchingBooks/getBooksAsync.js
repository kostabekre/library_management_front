import {BookData} from "./bookData";

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
            result[book.id] = new BookData(book.id, book.name, book.authorName);
        }
        return result;
    } catch (error) {
        console.error(error);
        return [];
    }
}