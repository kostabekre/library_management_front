import getDropdownById from "../../src/helpers/getDropdownById.js";
import {AuthorData} from "./authorData.js";

const publisherDropdown = getDropdownById('book-author-1', 'select author');
const allAuthors = await getAllAuthors();
const authorsLeft = new Set();
allAuthors.forEach(author => {
    authorsLeft.add(author);
});

publisherDropdown.addEventListener('input', (e) => {
    // if(firstDropdownSelectedAuthor !== '') {
    //     authorsLeft.add(firstDropdownSelectedAuthor);
    // }
    // firstDropdownSelectedAuthor = e.target.value;
    // authorsLeft.delete(e.target.value);
    console.log(e.target.value);
    createNewDropdown('2');
});
allAuthors.forEach(author => {
    const o = new Option(author.details.name, author.id.toString());
    publisherDropdown.add(o);
});

function createNewDropdown(id) {
    const newName = `book-author-${id}`;
    const select = document.getElementById(newName);
    if(select != null ) {
        return;
    }
    const authorsArea = document.getElementById('authors-select-area');
    // if you add new html to the parent, the event won't be fired again.
    // authorsArea.innerHTML += `
    // <label for=${newName}>${id}</label>
    // <select name=${newName} id=${newName}></select>
    // `
}
/**
 *
 * @returns {Promise<AuthorData[]>}
 */
async function getAllAuthors() {
    try {
        const response = await fetch("http://localhost:8080/api/authors/")
        if(!response.ok) {
            console.warn("Couldn't fetch authors");
            return [];
        }

        const json = await response.json();
        const allAuthors = [];
        json.forEach(author => {
            allAuthors.push(new AuthorData(author));
        })

        return allAuthors;
    } catch (e) {
        console.error(e);
        return [];
    }
}
