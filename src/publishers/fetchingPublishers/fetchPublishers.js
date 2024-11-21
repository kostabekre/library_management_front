import {getPublishersAsync} from "./getPublishersAsync.js";
import {createPublisherTemplate} from "./createPublisherTemplate.js";

const publisherFetcher = getPublishersAsync;

const fetchedPublishers = await publisherFetcher();

const publishersContainer = document.getElementById('publishers-container');

for(const publisher of Object.values(fetchedPublishers)) {
    publishersContainer.innerHTML += createPublisherTemplate(publisher);
}
