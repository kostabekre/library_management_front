import {userInfoCollector} from "./userInfoCollector.js";

export async function getPublisherHandler(req, res) {
    const url = "http://localhost:8080/api/publishers/" + req.params.publisherId;
    let data;
    try {
        const response = await fetch(url);
        if(!response.ok) {
            res.render('not-found');
            return;
        }

        data  = await response.json()
    } catch (e) {
        console.error(e);
    }
    res.render('single-publisher', {
        title: data.details.name,
        publisher: data,
        userInfo: userInfoCollector(req),
    });

    return res;
}
