import {userInfoCollector} from "./userInfoCollector.js";

export async function getAuthorHandler(req, res) {
    const url = "http://localhost:8080/api/authors/" + req.params.authorId;
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
    res.render('single-author', {
        title: data.details.name,
        author: data,
        userInfo: userInfoCollector(req),
    });

    return res;
}
