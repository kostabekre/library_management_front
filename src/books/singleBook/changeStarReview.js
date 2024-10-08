import {clearStars, stars} from "./starHelper.js";

const selectedRating = document.getElementById("book-selected-rating");

changeStarRegisteredUser(selectedRating.value);

for (const star of stars) {
    star.addEventListener("click", () => {
        const splitted = star.id.split('-');
        changeStarRegisteredUser(Number(splitted[splitted.length - 1]));
        saveStarValue();
    })
}

function changeStarRegisteredUser(ordinalNumber) {
    clearStars()

    for (const star of stars) {
        star.classList.add("star-selectable");
    }

    for (let i = 0; i < ordinalNumber; i++) {
        stars[i].classList.add("selected-star");
    }
    selectedRating.value = ordinalNumber;
}


async function saveStarValue() {
    const bookId = document.getElementById("book-id").value;
    const url = `http://localhost:8080/api/books/rating/${bookId}`;
    const sendData = new FormData();
    const rating = selectedRating.value;
    sendData.append("rating", rating);
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'accept': 'application/json',
        },
        body: sendData,
        credentials: "include",
    });
    if(!response.ok) {
        const errors = await response.json();
        console.log(errors);
        return;
    }
    console.log('success!');
}
