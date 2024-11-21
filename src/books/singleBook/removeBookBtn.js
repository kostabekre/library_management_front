import showErrors from "../../components/showErrors.js";

const openRemoveBookBtn = document.getElementById("remove-book-btn");
const removeBookYesBtn = document.getElementById("remove-book-yes-btn");
const removeBookNoBtn = document.getElementById("remove-book-no-btn");

openRemoveBookBtn.addEventListener("click", () => {
    document.getElementById("remove-book-overlay-wrapper").style.display = "block";
});

removeBookYesBtn.addEventListener("click", () => {
    const id = document.getElementById("book-id").value;
    removeBook(id);
});

removeBookNoBtn.addEventListener("click", () => {
    document.getElementById("remove-book-overlay-wrapper").style.display = "none";
});

async function removeBook(id) {
    const response = await fetch(`http://localhost:8080/api/books/${id}`, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        credentials: 'include',
    });

    if(!response.ok) {
        if(response.status === 404) {
            showErrors('remove-book-errors', ['The book is not founded!']);
        } else {

            showErrors('remove-book-errors', ['Unknown error!']);
        }
        return;
    }

    window.location.replace("/");
}