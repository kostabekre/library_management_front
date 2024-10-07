import {userInfoCollector} from "./userInfoCollector.js";
import {FullBookInfo} from "../books/fullBookInfo.js";

export default async function updateBookHandler(req, res) {
    const url = "http://localhost:8080/api/books/" + req.params.bookId;

    let data;
    try {
        const response = await fetch(url);
        if(!response.ok) {
            res.render('not-found', {
                userInfo: userInfoCollector(req)
            });
            return;
        }

        data  = await response.json()
    } catch (e) {
        console.error(e);
        return;
    }

    data = new FullBookInfo(data, req.acceptsLanguages()[0]);

    res.render('books/update-book', {
        title: data.name,
        book: data,
        userInfo: userInfoCollector(req),
    });

    return res;
}
