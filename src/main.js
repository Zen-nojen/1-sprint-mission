import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import passport from '../lib/passport.js';
import { PORT, PUBLIC_PATH, STATIC_PATH } from '../lib/constants.js';
import usersRouter from '../routers/usersRouter.js';
import articlesRouter from '../routers/articlesRouter.js';
import productsRouter from '../routers/productsRouter.js';
import commentsRouter from '../routers/commentsRouter.js';
import imagesRouter from '../routers/imagesRouter.js';

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(passport.initialize());
app.use(STATIC_PATH, express.static(path.resolve(process.cwd(), PUBLIC_PATH)));

app.use('/users', usersRouter);
app.use('/articles', articlesRouter);
app.use('/products', productsRouter);
app.use('/comments', commentsRouter);
app.use('/images', imagesRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
