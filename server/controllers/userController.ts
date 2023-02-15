import { Request, Response, NextFunction } from 'express';
const db = require('../models/model.ts');
const jwtDecode = require('jwt-decode');

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
  console.log(gmail, isadmin, strikes, isblacklisted);
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

function decodeOAuth(req, res, next){
  const credential = req.body.credential;
  const userCredential = jwtDecode(credential);
  const email = userCredential.email;
  res.locals.email = email;
  return next();
}
const createNewUserFromOAuth = async (gmail) => {
  const created_at = new Date().toLocaleDateString();
  const queryString = `
    INSERT INTO users (gmail, isadmin, created_at, strikes, isblacklisted)
    VALUES ('${gmail}','false','${created_at}','0','false')`;
  await db.query(queryString)
    .then((response) => {
      console.log('db response;', response);
    })
    .catch((err) => {
      console.log(err);
    });
    const newUser = await db.query(`SELECT * FROM users WHERE gmail='${gmail}'`)
    console.log('This is newUser', newUser);
  return newUser.rows[0];
}
const getUserFromOAuth= async (req, res, next) => {
  console.log('This is res.locals: ',res.locals)
  const {email} = res.locals;
  console.log('This is email: ', email)
  //query db to see if user exists
  const queryString = `
  SELECT * FROM users WHERE gmail='${email}'
  `
  const user = await db.query(queryString);
  console.log('db querry response:', user)
  if(user.rows[0]!== undefined){
    console.log('This is our user: ', user.rows[0])
    const {gmail, isadmin, strikes, isblacklisted}= user.rows[0];
    console.log(gmail, isadmin, strikes, isblacklisted)
    res.locals.user = {gmail, isadmin, strikes, isblacklisted}
    return next();
  }else{
    const createdUser = await createNewUserFromOAuth(email);
    res.locals.user = createdUser;
    return next();
  }

}

export { userController, getUserFromOAuth, decodeOAuth };
