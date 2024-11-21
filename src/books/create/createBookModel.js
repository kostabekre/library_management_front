export default class CreateBookModel {
    constructor({name, isbn, description, authorsId, publisherId, bookAmount, bookRating, datePublished, genresId}) {
        this.name = name;
        this.isbn = isbn;
        this.description = description;
        this.authorsId = authorsId;
        this.publisherId = publisherId;
        this.bookAmount = bookAmount;
        this.bookRating = bookRating;
        this.datePublished = datePublished;
        this.genresId = genresId;
    }
}
