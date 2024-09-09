﻿export async function getBookHandler(req, res) {
    const url = "http://localhost:8080/api/books/" + req.params.bookId;
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

    res.render('book', {
        title: data.name,
        book: data
    });

    return res;
}