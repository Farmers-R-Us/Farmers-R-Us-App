const express = require('express');
const router = express.Router();
const { userController } = require('../controllers/userController.ts');

// CREATE USER
router.post('/', userController.createUser, (req, res) => {
  return res.status(200).json('Created User');
});

// INSERT INTO INVENTORY
router.post('/inventory', userController.insertInventory, (req, res) => {
  return res.status(200).json('Inserted into Inventory');
});

export { router };
