const btn = document.getElementById('change-book-btn');
const id = document.getElementById('book-id').value;
btn.addEventListener('click', () => {
    window.location.replace(`/books/${id}/edit`)
})