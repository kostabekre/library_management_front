import CreateBookModel from "./createBookModel.js";
import showErrors from "../../components/showErrors.js";

const button = document.getElementById("book-create-btn");
button.addEventListener("click", () => {
    sendBook();
})

async function sendBook() {
    const sendData = getSendData();

    const errors = validate(sendData);

    if(errors.length > 0) {
        showErrors("errors", errors);
        return;
    }

    try {
        const response = await fetch("http://localhost:8080/api/books", {
            method: "POST",
            body: JSON.stringify(sendData),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            credentials: 'include',
        });
        if(!response.ok) {
            const errorData = await response.json();
            showErrors("errors", Object.values(errorData.errors));
            return;
        }
        window.location.replace("/");
    } catch (e) {
        console.error(e);
    }
}

/**
 *
 * @returns {CreateBookModel}
 */
function getSendData() {
    const formElement = document.getElementById("book-create-form");
    const formData = new FormData(formElement);
    const sendData = {
        name: formData.get("name"),
        isbn: formData.get("isbn"),
        authorsId: [Number(formData.get("book-author-1"))],
        publisherId: Number(formData.get("publisherId")),
        bookAmount: formData.get("bookAmount"),
        bookRating: formData.get("bookRating"),
        datePublished: formData.get("datePublished"),
        genresId: [Number(formData.get("book-genre-1"))],
    }

    return new CreateBookModel(sendData);
}

/**
 *
 * @param sendData {CreateBookModel}
 * @returns {Array<string>}
 */
function validate(sendData) {
    const errors = [];
    for(const [key, value] of Object.entries(sendData)) {
        if(value == null) {
            errors.push(`${key} is null`);
        }
    }

    return errors;
}