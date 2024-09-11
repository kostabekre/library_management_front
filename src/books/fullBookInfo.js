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
     * @param datePublished {string}
     * @param locale {string}
     */
    constructor({id, name, isbn, authors, publisher, genres, bookRating, bookAmount, datePublished}, locale) {
        this.id = id;
        this.name = name;
        this.authors = authors;
        this.isbn = isbn;
        this.publisher = publisher;
        this.genres = genres;
        this.bookRating = bookRating;
        this.bookAmount = bookAmount;
        if(typeof datePublished === "string") {
            datePublished = new Date(datePublished).toLocaleDateString(locale);
        }
        this.datePublished = datePublished;
    }
}