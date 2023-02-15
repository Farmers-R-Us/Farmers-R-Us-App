const express = require('express');
const path = require('path');
const cors = require('cors')
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

const app = express();
const { router: routes } = require('./routes/routes.ts');

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'assets')))

app.use('/api', routes);

app.use('*', (req: Request, res: Response) => res.sendStatus(404));

app.use(
  (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const defaultError = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    // console.log('before error: ', err);
    const errorObj = Object.assign(defaultError, err);
    console.log(errorObj.log);
    //not sure if json is in the right place
    return res.status(errorObj.status).send(JSON.stringify(errorObj.message));
  }
);

app.listen(3000, () => console.log('Listening on port 3000'));
export { app };
