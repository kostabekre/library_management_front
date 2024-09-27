import CreateBookModel from "./createBookModel.js";

export default class UpdateBookModel extends CreateBookModel {
    constructor(id, props) {
        super(props);
        this.id = id;
    }
}