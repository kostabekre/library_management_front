function BookData(title, author, image) {
    this.title = title;
    this.author = author;
    this.image = image;
}


/**
 *
 * @param bookData {BookData}
 * @returns {string}
 * @constructor
 */
function createBookTemplate(bookData) {
    return `<div class="book">
        <div class="book-img-container">
          <a href="#">
              <img src="${bookData.image}" alt="">
          </a>
        </div>
        <div class="book-info">
          <div class="book-info-title">
            <p><a href="#">${bookData.title}</a></p>
          </div>
          <div class="book-info-author">
            <p><a href="#">${bookData.author}</a></p>
          </div>
        </div>
    </div>`
}

/**
 *
 * @returns {BookData[]}
 */
function getBooksTest() {
    var book1 = new BookData("The Way of Kings", "Brandon Sanderson", "public/empty_cover.png");
    var book2 = new BookData("The Words of Radience", "Brandon Sanderson", "public/empty_cover.png");
    var book3 = new BookData("The oath bringer", "Brandon Sanderson", "public/empty_cover.png");
    var book4 = new BookData("The rithm of war", "Brandon Sanderson", "public/empty_cover.png");

    return [book1, book2, book3, book4];
}

const bookFetcher = getBooksTest;

const fetchedBooks = bookFetcher();

var booksContainer = document.getElementById('books-container');

for (var i = 0; i < fetchedBooks.length; i++) {
    booksContainer.innerHTML += createBookTemplate(fetchedBooks[i]);
}

