import {getAuthorsAsync} from "./getAuthorsAsync";
import {createAuthorTemplate} from "./createAuthorTemplate";

const authorFetcher = getAuthorsAsync;

const fetchedAuthors = await authorFetcher();

const authorContainer = document.getElementById('authors-container');

for(const author of Object.values(fetchedAuthors)) {
    authorContainer.innerHTML += createAuthorTemplate(author);
}
