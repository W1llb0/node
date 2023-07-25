const express = require('express');

const app = express();

const firstHandler = (req, res, next) => {
    console.log('First handler');
    next();
};
const secondHandler = (req, res) => res.send('Responce from Express');

app.get('/', firstHandler, secondHandler);

app.listen(5000, () => console.log('Server was started on port 5000'));
