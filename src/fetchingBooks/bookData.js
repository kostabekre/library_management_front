export class BookData {
    constructor(id, name, authorName, image) {
        this.id = id;
        this.name = name;
        this.authorName = authorName;
        if (image === undefined) {
            this.image = 'public/empty_cover.png';
        } else {
            this.image = image;
        }
    }
}