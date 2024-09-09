import {ShortAuthorData} from "./ShortAuthorData.js";

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
        if(author === undefined) {
            this.author = new ShortAuthorData(1, "NaN");
        } else {
            this.author = author;
        }
        if (image === undefined) {
            this.image = 'public/empty_cover.png';
        } else {
            this.image = image;
        }
    }
}