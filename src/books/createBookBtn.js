const button = document.getElementById("book-create-btn");
button.addEventListener("click", (e) => {
    sendBook();
})

async function sendBook() {
    const formElement = document.getElementById("book-create-form");
    const formData = new FormData(formElement);
    const sendData = {
        name: formData.get("name"),
        isbn: formData.get("isbn"),
        authorsId: [formData.get("book-author-1")],
        publisherId: formData.get("publisherId"),
        bookAmount: formData.get("bookAmount"),
        bookRating: formData.get("bookRating"),
        datePublished: formData.get("datePublished"),
        genresId: formData.get("genresId"),
    }
    for(const [key, value] of Object.entries(sendData)) {
        if(value == null) {
            console.error(`${key} is null`)
        }
    }
    return;
    try {
        const response = await fetch("https://localhost:8080/api/books", {
            method: "POST",
            body: JSON.stringify({})
        });
        if(response.ok) {
            window.location.replace("/");
            return;
        }
        const json = await response.json();
        console.error(json);
    } catch (e) {
        console.error(e);
    }
}