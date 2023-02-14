//const express = require('express');
import express from 'express';
import {Request, Response} from 'express';
import { userController } from '../controllers/userController';
const router = express.Router();
//const { userController } = require('../controllers/userController.ts');

// CREATE USER
router.post('/', userController.createUser, (req: Request, res: Response) => {
  return res.status(200).json('Created User');
});

// INSERT INTO INVENTORY
// router.post('/inventory', userController.insertInventory, (req, res) => {
//   return res.status(200).json('Inserted into Inventory');
// });

//export { router };
export {router };
