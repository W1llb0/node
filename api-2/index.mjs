import express from 'express';
import { default as userRouter } from './routes/user-routes.mjs';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use('/api', userRouter);

app.listen(PORT, () => console.log(`Server was started on port ${PORT}`));
