﻿import {AuthorData} from "../authorData.js";

export async function getAuthorsAsync() {
    const uri = "http://127.0.0.1:8080/api/authors";
    try {
        const response = await fetch(uri);

        if (!response.ok) {
            console.error(response.statusText);
            return [];
        }

        const json = await response.json();
        let result = {};
        for (let author of json) {
            result[author.id] = new AuthorData(author);
        }
        return result;
    } catch (error) {
        console.error(error);
        return [];
    }
}
