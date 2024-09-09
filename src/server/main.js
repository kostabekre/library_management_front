import express from "express";
import ejs from "ejs";
import ViteExpress from "vite-express";

const app = express();


app.engine('.html', ejs.__express);

app.set('view engine', '.html');

app.use('/public', express.static('public'));

app.get('/', function(req, res){
    res.render('books', {
        title: "books"
    });
});

app.get('/books/:bookId', async function(req, res){
    let response;
    try {
        response = await fetch("http://localhost:8080/api/books/" + 1);
    } catch (e) {
        console.error(e);
    }
    let data;
    try {
        data  = await response.json()
    } catch (e) {
        console.error(e)
    }
    res.send(data);
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

app.get("/hello", async (req, res) => {
    res.send("Hello Vite!");
});

ViteExpress.listen(app, 3000, () =>
    console.log("Server is listening on port 3000..."),
);