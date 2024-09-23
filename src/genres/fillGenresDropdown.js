import getDropdownById from "../../src/helpers/getDropdownById.js";
import {GenreData} from "./genreData.js";

const genresDropdown = getDropdownById('book-genre-1', 'select genre');
FillDropdown(genresDropdown)

/**
 *
 * @param genresDropdown {HTMLSelectElement}
 * @returns {Promise<void>}
 * @constructor
 */
async function FillDropdown(genresDropdown) {
    try {
        const response = await fetch("http://localhost:8080/api/genres/get_all");
        if(!response.ok) {
            console.warn("Couldn't fetch genres");
            return;
        }
        const json = await response.json();
        json.forEach(genreData => {
            const genre = new GenreData(genreData);
            const newOption = new Option(genre.details.name, genre.id.toString())
            genresDropdown.add(newOption);
        });
    } catch (e) {
        console.error(e);
    }
}
