export class BookData {
    constructor(id, name, authorName, image) {
        this.id = id;
        this.name = name;
        this.authorName = authorName;
        if (image === undefined) {
            this.image = '';
        } else {
            this.image = image;
        }
    }
}