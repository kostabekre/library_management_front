const btn = document.getElementById('change-name-btn');
const applyChangesBtn = document.getElementById('save-changed-name-btn');
const titleNameView = document.getElementById('title-name-view');
const titleNameEdit = document.getElementById('title-name-edit');
/** @type{HTMLInputElement} */
const newNameInput = document.getElementById('new-name-input');
titleNameEdit.style.display = 'none';
const bookName = document.getElementById('book-title-name');
const bookId = document.getElementById('book-id');

btn.addEventListener('click', () => {
    newNameInput.style.border = 'none'
    titleNameView.style.display = 'none';
    titleNameEdit.style.display = 'block';
    newNameInput.value = bookName.innerHTML;
})

applyChangesBtn.addEventListener('click', () => {
    tryToSaveName();
});

async function tryToSaveName() {
    const isUpdated = await saveNameAsync(newNameInput.value, bookId.value);

    if (isUpdated) {
        bookName.innerHTML = newNameInput.value;
        titleNameView.style.display = 'block';
        titleNameEdit.style.display = 'none';
    } else {
        newNameInput.style.border = '2px solid red'
    }
}

/**
 *
 * @param name {string}
 * @param id {number}
 * @returns {Promise<boolean>}
 */
async function saveNameAsync(name, id) {
    const sendData = new FormData();
    sendData.append('name', name);
    const response = await fetch(`http://localhost:8080/api/books/name/${id}`, {
        method: 'PUT',
        headers: {
            'accept': 'application/json',
        },
        credentials: "include",
        body: sendData
    })

    return response.ok;
}
