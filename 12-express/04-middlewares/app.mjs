import express from 'express';

const app = express();

const logger = (req, res, next) => {
    console.log(req.method, req.path);
    next();
};

app.use(logger);

app.use((req, res) => res.send('This is express server'));

app.listen(5000, () => console.log('server is listening at port 5000'));
