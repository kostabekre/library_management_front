function BookData(id, name, authorName, image) {
    this.id = id;
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
    var book1 = new BookData(1, "The Way of Kings", "Brandon Sanderson", "public/empty_cover.png");
    var book2 = new BookData(2, "The Words of Radience", "Brandon Sanderson", "public/empty_cover.png");
    var book3 = new BookData(3, "The oath bringer", "Brandon Sanderson", "public/empty_cover.png");
    var book4 = new BookData(4, "The rithm of war", "Brandon Sanderson", "public/empty_cover.png");

    return [book1, book2, book3, book4];
}

async function getBooksApi() {
    const uri = "https://127.0.0.1:7221/api/books/all";
    const uriCover = "https://127.0.0.1:7221/api/books/cover/";
    try {
        const response = await fetch(uri);

        if (!response.ok) {
            console.error(response.statusText);
            return [];
        }

        const json = await response.json();
        let result = [];
        for (let book of json) {
            let image;
            try {
                const imageResponse = await fetch(uriCover + book.id);
                if(imageResponse.status === 404)
                {
                    result.push(new BookData(book.id, book.name, book.authorName));
                    continue;
                }
                const imageBlob = await imageResponse.blob();
                image = URL.createObjectURL(imageBlob);
            } catch (e) {
                console.error(e.message);
            }
            result.push(new BookData(book.id, book.name, book.authorName, image));
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

