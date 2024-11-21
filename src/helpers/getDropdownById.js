/**
 *
 * @param id {string}
 * @param defaultOptionText {string}
 * @returns HTMLSelectElement
 * @constructor
 */
 export default function getDropdownById(id, defaultOptionText) {
    /**
     * @type {HTMLSelectElement}
     */
    const dropdown = document.getElementById(id);
    const defaultOption = new Option(defaultOptionText, null, true, true);
    defaultOption.disabled = true;
    dropdown.add(defaultOption);
    return dropdown;
}