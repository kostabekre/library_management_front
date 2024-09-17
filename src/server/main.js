import express from "express";
import ejs from "ejs";
import ViteExpress from "vite-express";
import {getBookHandler} from "./getBookHandler.js";
import {getAuthorHandler} from "./getAuthorHandler.js";
import {getPublisherHandler} from "./getPublisherHandler.js";

const app = express();


app.engine('.html', ejs.__express);

app.set('view engine', '.html');

app.use('/public', express.static('public'));

app.get('/', function(req, res){
    res.render('books');
});

app.get('/login', function(req, res) {
    res.render('authorization/login')
});

app.get('/registration', function(req, res) {
    res.render('authorization/registration')
});

app.get('/books/:bookId', getBookHandler);

app.get('/authors/:authorId', getAuthorHandler);

app.get('/publishers/:publisherId', getPublisherHandler);

app.get('/authors', function(req, res){
    res.render('authors');
});

app.get('/publishers', function(req, res){
    res.render('publishers');
});

ViteExpress.listen(app, 3000, () =>
    console.log("Server is listening on port 3000..."),
);