import {PublisherData} from "./publisherData.js";

export async function getPublishersAsync() {
    const uri = "http://127.0.0.1:8080/api/publishers";
    try {
        const response = await fetch(uri);

        if (!response.ok) {
            console.error(response.statusText);
            return [];
        }

        const json = await response.json();
        let result = {};
        for (let publisher of json) {
            result[publisher.id] = new PublisherData(publisher.id, publisher.details.name, publisher.details.address);
        }
        return result;
    } catch (error) {
        console.error(error);
        return [];
    }
}
