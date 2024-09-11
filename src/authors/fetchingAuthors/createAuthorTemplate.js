/**
 *
 * @param authorData {AuthorData}
 * @returns {string}
 * @constructor
 */
export function createAuthorTemplate(authorData) {
    return `<div class="author">
        <div class="author-img-container">
          <a href="#">
              <img src="public/person_icon.png" alt="">
          </a>
        </div>
        <div class="author-info">
          <div class="author-info-name">
            <p><a href="/authors/${authorData.id}">${authorData.details.name}</a></p>
          </div>
          <div class="author-info-biography">
            <p>${authorData.details.biography}</p>
          </div>
        </div>
    </div>`
}
