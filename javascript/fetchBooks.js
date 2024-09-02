function BookData(name, authorName, image) {
    this.name = name;
    this.authorName = authorName;
    if(image === undefined)
    {
        this.image = "public/empty_cover.png";
    }
    else
    {
        this.image = image;
    }
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
            <p><a href="#">${bookData.name}</a></p>
          </div>
          <div class="book-info-author">
            <p><a href="#">${bookData.authorName}</a></p>
          </div>
        </div>
    </div>`
}

async function getBooksTest() {
    var book1 = new BookData("The Way of Kings", "Brandon Sanderson", "public/empty_cover.png");
    var book2 = new BookData("The Words of Radience", "Brandon Sanderson", "public/empty_cover.png");
    var book3 = new BookData("The oath bringer", "Brandon Sanderson", "public/empty_cover.png");
    var book4 = new BookData("The rithm of war", "Brandon Sanderson", "public/empty_cover.png");

    return [book1, book2, book3, book4];
}

async function getBooksApi() {
    const uri = "http://127.0.0.1:5101/api/books/all";
    try {
        const response = await fetch(uri);

        if (!response.ok) {
            console.error(response.statusText);
            return [];
        }

        const json = await response.json();
        let result = [];
        for (let book of json) {
            result.push(new BookData(book.name, book.authorName));
        }
        return result;
    } catch (error) {
        console.error(error);
        return [];
    }
}

const bookFetcher = getBooksApi;

const fetchedBooks = await bookFetcher();

var booksContainer = document.getElementById('books-container');

for (var i = 0; i < fetchedBooks.length; i++) {
    booksContainer.innerHTML += createBookTemplate(fetchedBooks[i]);
}

