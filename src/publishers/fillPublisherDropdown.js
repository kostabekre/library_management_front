import {PublisherData} from "./publisherData.js";
import getDropdownById from "../../src/helpers/getDropdownById.js";

const publisherDropdown = getDropdownById('book-publisher', 'select publisher');
FillDropdown(publisherDropdown)

/**
 *
 * @param publisherDropdown {HTMLSelectElement}
 * @returns {Promise<void>}
 * @constructor
 */
async function FillDropdown(publisherDropdown) {
    try {
        const response = await fetch("http://localhost:8080/api/publishers/");
        if(!response.ok) {
            console.warn("Couldn't fetch publishers");
            return;
        }
        const json = await response.json();
        json.forEach(publisherData => {
            const publisher = new PublisherData(publisherData);
            const newOption = new Option(publisher.details.name, publisher.id.toString())
            publisherDropdown.add(newOption);
        });
    } catch (e) {
        console.error(e);
    }
}
