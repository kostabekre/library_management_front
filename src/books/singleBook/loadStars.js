import {clearStars, stars} from "./starHelper.js";

const selectedRating = document.getElementById("book-selected-rating");

changeStar(Number(selectedRating.value));

function changeStar(ordinalNumber) {
    clearStars()

    for (let i = 0; i < ordinalNumber; i++) {
        stars[i].classList.add("selected-star");
    }
    selectedRating.value = ordinalNumber;
}
