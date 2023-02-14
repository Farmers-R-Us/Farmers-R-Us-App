import { Request, Response, NextFunction } from 'express';
const db = require('../models/model.ts');

interface controller {
  //get: (req: Request, res: Response, next: NextFunction) => void;
  createUser: (req: Request, res: Response, next: NextFunction) => void;
}

const userController: controller = {

  createUser (req: Request, res: Response, next: NextFunction) {
    const { gmail, isadmin, created_at, strikes, isblacklisted } = req.body;
    console.log(gmail, isadmin, created_at, strikes, isblacklisted);
    const queryString = `INSERT INTO users (gmail, isadmin, created_at, strikes, isblacklisted)
          VALUES ('${gmail}','${isadmin}','${created_at}','${strikes}','${isblacklisted}')`;
    db.query(queryString)
      .then((res:Response) => {
        console.log(res);
      })
      .catch((err: Error) => {
        console.log(err);
      });
    return next();
  }
};

export { userController };
