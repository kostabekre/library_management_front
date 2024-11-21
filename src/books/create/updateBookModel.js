export default class UpdateBookModel {
    /**
     *
     * @param name {string}
     * @param genresId {Array<number>}
     * @param description {string}
     */
    constructor({name, genresId, description}) {
        this.name = name;
        this.genresId = genresId;
        this.description = description;
    }
}