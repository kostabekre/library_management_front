﻿import express from "express";
import ViteExpress from "vite-express";
import ejs from 'ejs';

const app = express();

app.engine('.html', ejs.__express);

app.set('view engine', '.html');

app.use('/public', express.static('public'));

app.get('/', function(req, res){
    res.render('books', {
        title: "books"
    });
});

app.get('/authors', function(req, res){
    res.render('authors', {
        title: "authors",
    });
});

app.get('/publishers', function(req, res){
    res.render('publishers', {
        title: "EJS example",
    });
});

ViteExpress.listen(app, 3000, () =>
    console.log("Server is listening on port 3000..."),
);
