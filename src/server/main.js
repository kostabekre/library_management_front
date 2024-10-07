import express from "express";
import ViteExpress from "vite-express";
import {getBookHandler} from "./getBookHandler.js";
import {getAuthorHandler} from "./getAuthorHandler.js";
import {getPublisherHandler} from "./getPublisherHandler.js";
import {userInfoCollector} from "./userInfoCollector.js";
import expressLayouts from "express-ejs-layouts";
import updateBookHandler from "./updateBookHandler.js";

const app = express();

app.set('view engine', '.ejs');
app.set('layout', '../layouts/layout');

app.use(expressLayouts);

app.use('/public', express.static('public'));

app.get('/', function(req, res){
    const userInfo = userInfoCollector(req);
    res.render('books/books', {
        userInfo: userInfo
    });
});

app.get('/books/:bookId', getBookHandler);

app.get('/books/:bookId/edit', updateBookHandler);

app.get('/login', function(req, res) {
    res.render('authorization/login', {
        userInfo: userInfoCollector(req),
    })
});

app.get('/registration', function(req, res) {
    res.render('authorization/registration', {
        userInfo: userInfoCollector(req),
    })
});

app.get('/authors/:authorId', getAuthorHandler);

app.get('/publishers/:publisherId', getPublisherHandler);

app.get('/authors', function(req, res){
    res.render('authors/authors', {
        userInfo: userInfoCollector(req)
    });
});

app.get('/publishers', function(req, res){
    res.render('publishers/publishers', {
        userInfo: userInfoCollector(req),
    });
});

ViteExpress.listen(app, 3000, () =>
    console.log("Server is listening on port 3000..."),
);