/**
 *
 * @param bookData {BookData}
 * @returns {string}
 * @constructor
 */
export function createBookTemplate(bookData) {
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