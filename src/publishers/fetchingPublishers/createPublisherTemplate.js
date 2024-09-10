/**
 *
 * @param publisherData {PublisherData}
 * @returns {string}
 * @constructor
 */
export function createPublisherTemplate(publisherData) {
    return `<div class="publisher">
        <div class="publisher-img-container">
          <a href="#">
              <img src="public/person_icon.png" alt="">
          </a>
        </div>
        <div class="publisher-info">
          <div class="publisher-info-name">
            <p><a href="#">${publisherData.details.name}</a></p>
          </div>
          <div class="publisher-info-address">
            <p>${publisherData.details.address}</p>
          </div>
        </div>
    </div>`
}
