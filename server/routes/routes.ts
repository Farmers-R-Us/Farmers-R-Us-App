//const express = require('express');
import express from 'express';
import { Request, Response } from 'express';
import { userController, getUserFromOAuth, decodeOAuth } from '../controllers/userController';
const router = express.Router();
const {
  inventoryController,
} = require('../controllers/inventoryController.ts');
const { reservedController } = require('../controllers/reservedController.ts');

// CREATE USER
router.post(
  '/users',
  userController.createUser,
  (req: Request, res: Response) => {
    return res.status(200).json('Created User');
  }
);

// INSERT INTO INVENTORY
router.post(
  '/inventory',
  inventoryController.insertInventory,
  (req: Request, res: Response) => {
    return res.status(200).json('Inserted into Inventory');
  }
);
// GET INVENTORY
router.get(
  '/inventory',
  inventoryController.getInventory,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals.inventory);
  }
);

router.post('/oAuth', decodeOAuth, getUserFromOAuth, (req, res) => {
  console.log('This is res.locals: ', res.locals)
  const {gmail, isadmin, strikes, isblacklisted} = res.locals.user;
  const resBody = {gmail, isadmin, strikes, isblacklisted}
  return res.status(200).send(resBody);
})

export { router };
