import {ShortAuthorData} from "../authors/ShortAuthorData.js";

export class BookData {
    /**
     *
     * @param id
     * @param name
     * @param author {ShortAuthorData}
     * @param image
     */
    constructor(id, name, author, image) {
        this.id = id;
        this.name = name;
        this.author = author;
        if (image === undefined) {
            this.image = 'public/empty_cover.png';
        } else {
            this.image = image;
        }
    }
}