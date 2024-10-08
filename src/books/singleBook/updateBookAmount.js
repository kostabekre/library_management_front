const increaseAmountBtn = document.getElementById('book-increase-amount');
const decreaseAmountBtn = document.getElementById('book-decrease-amount');
const bookAmountElement = document.getElementById('book-amount');
const bookId = Number(document.getElementById('book-id').value);
hideDecreaseAmountBtn();

increaseAmountBtn.addEventListener('click', () => {
    updateBookAmount(bookId, Number(bookAmountElement.innerHTML) + 1)
        .then(() => {
            if(Number(bookAmountElement.innerHTML) > 0) {
                decreaseAmountBtn.style.display = 'inline';
            }
        });
});


decreaseAmountBtn.addEventListener('click', () => {
    updateBookAmount(bookId, Number(bookAmountElement.innerHTML) - 1)
        .then(hideDecreaseAmountBtn);
})

function hideDecreaseAmountBtn() {
    if(Number(bookAmountElement.innerHTML) <= 0) {
        decreaseAmountBtn.style.display = 'none';
    }
}

/**
 *
 * @param bookId {number}
 * @param amount {number}
 * @returns {Promise<void>}
 */
async function updateBookAmount(bookId, amount) {
    const sendData = new FormData();
    sendData.append('amount', amount);
    const response = await fetch(`http://localhost:8080/api/books/amount/${bookId}`, {
        method: 'PUT',
        headers: {
            'accept': 'application/json',
        },
        credentials: "include",
        body: sendData
    });

    if(!response.ok) {
        if(response.status === 404) {
            console.error("The book is not founded!")
        } else if(response.status === 401) {
            console.error("Bad request!")
        }
        return;
    }

    bookAmountElement.innerHTML = amount;
}