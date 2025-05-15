const express = require('express');
const app = express();
const parser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('books.sqlite');

app.use(express.static('public'));
app.use(parser.json());

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY AUTOINCREMENT, author VARCHAR(25) NOT NULL, title VARCHAR(40) NOT NULL, genre VARCHAR(20) NOT NULL, price REAL NOT NULL)");
});

app.get('/books/:keyword', function(req, res) {
    const keyword = req.params.keyword;
    const query = `SELECT * FROM books WHERE (title LIKE "%${keyword}%")`;
    db.all(query, (err, results) => {
        if (err) {
            res.status(500);
            res.send({ 'error': `Internal Database Error :( Please try again ` });
            console.error(err);
        } else {
            if (results.length == 0) {
                res.status(404);
                res.send({ 'error': 'Book does not exist' });
                console.error(err);
            } else {
                res.json(results);
            }
        }
    });
});

app.post('/books', function(req, res) {
    const book = req.body;
    const query = `INSERT INTO books (author, title, genre, price) VALUES ("${book.author}", "${book.title}", "${book.genre}", ${book.price})`;
    db.run(query, (err) => {
        if (err) {
            res.status(500);
            res.send({ 'error': `Internal Database Error :( Please try again ` });
            console.error(err);
        } else {
            res.json({ 'result': 'Book submitted successfully' });
        }
    });
});

app.listen(3000, function() {
    console.log('Server Started! http://localhost:3000');
});