import updateCover from "./loadSingleBookImage.js";
import showErrors from "../../components/showErrors.js";

/** @type {HTMLButtonElement} */
const btn = document.getElementById('update-cover-btn');
const confirmBtn = document.getElementById('new-cover-confirm-btn');
const closeBtn = document.getElementById('file-upload-close');
const newCoverFileBtn = document.getElementById('new-cover-file');

btn.addEventListener('click', () => {
  const overlayContent = document.getElementById('overlay-wrapper');
  overlayContent.style.display = 'block';
});

confirmBtn.addEventListener('click', uploadImage);

closeBtn.addEventListener('click', hideOverlay);

newCoverFileBtn.addEventListener('change', (event) => {
    if(event.target.value === null) {
        return;
    }
    const label = document.getElementById('file-upload-label');
    label.innerHTML = event.target.files[0].name.substring(0, 7) + '.' + event.target.files[0].type.split('/')[1];
})

function hideOverlay()
{
    const overlayContent = document.getElementById('overlay-wrapper');
    overlayContent.style.display = 'none';
    const errorsDiv = document.getElementById('upload-errors');
    errorsDiv.innerHTML = '';
    document.getElementById("new-cover-file").value = '';
    const label = document.getElementById('file-upload-label');
    label.innerHTML = 'Select an image';
}

async function uploadImage() {
    const bookIdEl = document.getElementById("book-id").value;
    /** @type {HTMLInputElement} */
    const newCoverFile = document.getElementById("new-cover-file").files[0];
    const uri = `http://localhost:8080/api/books/cover/${bookIdEl}`;
    const data = new FormData();
    data.append("file", newCoverFile);
    const response = await fetch(uri, {
        headers: {
            'Accept': 'application/json',
        },
        credentials: 'include',
        method: 'PUT',
        body: data
    });
    if(!response.ok) {
        const json = await response.json();
        showErrors("upload-errors", json.errors);
        return;
    }
    updateCover();
    hideOverlay();
}