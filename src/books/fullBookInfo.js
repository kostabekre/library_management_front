export class FullBookInfo {
    /**
     *
     * @param id {number}
     * @param name {string}
     * @param isbn {string}
     * @param authors {Array<AuthorData>}
     * @param publisher {PublisherData}
     * @param genres {Array<GenreData>}
     * @param bookRating {number}
     * @param bookAmount {number}
     * @param datePublished {Date}
     */
    constructor(id, name, isbn, authors, publisher, genres, bookRating, bookAmount, datePublished) {
        this.id = id;
        this.name = name;
        this.authors = authors;
        this.publisher = publisher;
        this.genres = genres;
        this.bookRating = bookRating;
        this.bookAmount = bookAmount;
        this.datePublished = datePublished;
    }
}