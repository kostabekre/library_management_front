export default class UpdateBookModel {
    /**
     *
     * @param name {string}
     * @param genresId {Array<number>}
     * @param amount {number}
     * @param bookRating {number}
     */
    constructor({name, genresId, bookAmount, bookRating}) {
        this.name = name;
        this.bookAmount = bookAmount;
        this.bookRating = bookRating
        this.genresId = genresId;
    }
}