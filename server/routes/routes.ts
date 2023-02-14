//const express = require('express');
import express from 'express';
import {Request, Response} from 'express';
import { userController } from '../controllers/userController';
const router = express.Router();
const { userController } = require('../controllers/userController.ts');
const {
  inventoryController,
} = require('../controllers/inventoryController.ts');

// CREATE USER
router.post('/users', userController.createUser, (req, res) => {
  return res.status(200).json('Created User');
});

// INSERT INTO INVENTORY
router.post('/inventory', inventoryController.insertInventory, (req, res) => {
  return res.status(200).json('Inserted into Inventory');
});
// GET INVENTORY
router.get('/inventory', inventoryController.getInventory, (req, res) => {
  return res.status(200).json(res.locals.inventory);
});

//export { router };
export {router };
