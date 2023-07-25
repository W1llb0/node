import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const dirname = process.cwd();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(dirname, 'comment-form.html'));
});

app.get('/json', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }

        res.send(JSON.parse(data));
    });
});

app.post('/', (req, res) => {
    const { id, author, text } = req.body;
    const data = JSON.parse(fs.readFileSync(path.join(dirname, 'data.json')));

    if (id !== null && author !== null && text !== null) {
        data.comments.push({ id, author, text });
    }

    fs.writeFileSync(path.join(dirname, 'data.json'), JSON.stringify(data));

    res.redirect('/'); // Перенаправление обратно на страницу с формой
});
app.post('/comments', (req, res) => {
    const { id, author, text } = req.body;
    const data = JSON.parse(fs.readFileSync(path.join(dirname, 'data.json')));

    if (id !== null && author !== null && text !== null) {
        data.comments.push({ id, author, text });
    }

    fs.writeFileSync(path.join(dirname, 'data.json'), JSON.stringify(data));

    res.redirect('/'); // Перенаправление обратно на страницу с формой
});

app.listen(5000, () => {
    console.log('Server started on port 5000');
});
