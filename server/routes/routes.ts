//const express = require('express');
import express from 'express';
import { Request, Response } from 'express';
import { userController } from '../controllers/userController';
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

// GET RESERVED PRODUCTS
router.get(
  '/reserved',
  reservedController.getReserved,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals.reserved);
  }
);
// INSERT INTO RESERVED
router.post(
  '/reserved',
  reservedController.insertReserved,
  (req: Request, res: Response) => {
    return res.status(200).json('Received Request');
  }
);
export { router };
