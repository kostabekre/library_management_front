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
        authorsId: [Number(formData.get("book-author-1"))],
        publisherId: Number(formData.get("publisherId")),
        bookAmount: formData.get("bookAmount"),
        bookRating: formData.get("bookRating"),
        datePublished: formData.get("datePublished"),
        genresId: [Number(formData.get("book-genre-1"))],
    }
    const errors = [];
    for(const [key, value] of Object.entries(sendData)) {
        if(value == null) {
            errors.push(`${key} is null`);
        }
    }
    if(errors.length > 0) {
        errors.forEach(error => {
            console.error(error);
        })
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
            const errorsDiv = document.getElementById("errors");
            errorsDiv.innerHTML = "";
            const ulElement = document.createElement('ul');
            errorsDiv.appendChild(ulElement);
            const errorData = await response.json();
            Object.values(errorData.errors).forEach(error => {
                const li = document.createElement("li");
                li.appendChild(document.createTextNode(error));
                ulElement.appendChild(li)
            })
            return;
        }
        window.location.replace("/");
    } catch (e) {
        console.error(e);
    }
}