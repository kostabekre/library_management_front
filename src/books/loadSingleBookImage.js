const uriCover = "http://127.0.0.1:8080/api/books/cover/";
const bookIdEl = document.getElementById("book-id");
const imageEl = document.getElementById("book-img");
let image;
try {
    const response = await fetch(uriCover + bookIdEl.value);
    if(!response.ok) {
        image = "/public/empty_cover.png";
    } else {
        const blob = await response.blob();
        image = URL.createObjectURL(blob);
    }
} catch (e) {
    console.error(e);
}

imageEl.src = image;
