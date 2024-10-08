import {userInfoCollector} from "./userInfoCollector.js";
import {FullBookInfo} from "../books/fullBookInfo.js";

export default async function updateBookHandler(req, res) {
    const userInfo = userInfoCollector(req);

    if (userInfo.IsLoggedIn === false ||
        isNaN(Number(req.params.bookId))) {
        res.render('not-found', {
            userInfo: userInfoCollector(req)
        });
        return;
    }

    const url = "http://localhost:8080/api/books/" + req.params.bookId;
    console.log(url);

    let data;
    try {
        const response = await fetch(url);
        if(!response.ok) {
            res.render('not-found', {
                userInfo: userInfo
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
        userInfo: userInfo,
    });

    return res;
}
