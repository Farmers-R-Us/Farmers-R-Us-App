import { Request, Response, NextFunction } from 'express';
const db = require('../models/model.ts');

interface controller {
  get: (req: Request, res: Response, next: NextFunction) => void;
  createUser: (req: Request, res: Response, next: NextFunction) => void;
}

const userController: controller = {
  get: null,
  createUser: null,
};

userController.createUser = (req, res, next) => {
  const { gmail, isadmin, created_at, strikes, isblacklisted } = req.body;
  console.log(gmail, isadmin, created_at, strikes, isblacklisted);
  const queryString = `
    INSERT INTO users (gmail, isadmin, created_at, strikes, isblacklisted)
    VALUES ('${gmail}','${isadmin}','${created_at}','${strikes}','${isblacklisted}')`;
  db.query(queryString)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  return next();
};

export { userController };
