export default class UpdateBookModel {
    /**
     *
     * @param name {string}
     * @param gendesId {Array<number>}
     */
    constructor(name, gendesId) {
        this.name = name;
        this.genresId = gendesId;
    }
}