import showErrors from "../../components/showErrors.js";
import UpdateBookModel from "./updateBookModel.js";

const button = document.getElementById("book-update-btn");
const bookId = document.getElementById("book-id").value;
button.addEventListener("click", () => {
    updateBook();
})

async function updateBook() {
    const sendData = getUpdateData();

    const errors = validate(sendData);

    if(errors.length > 0) {
        showErrors("errors", errors);
        return;
    }

    try {
        const response = await fetch(`http://localhost:8080/api/books/${bookId}`, {
            method: "PUT",
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
 * @returns {UpdateBookModel}
 */
function getUpdateData() {
    const formElement = document.getElementById("book-update-form");
    const formData = new FormData(formElement);
    const sendData = {
        name: String(formData.get("name")),
        description: String(formData.get("description")),
        genresId: [Number(formData.get("book-genre-1"))],
    }

    return new UpdateBookModel(sendData);
}

/**
 *
 * @param sendData {UpdateBookModel}
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
