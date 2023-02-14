import { Request, Response, NextFunction } from 'express';
const db = require('../models/model.ts');

interface controller {
  insertInventory: (req: Request, res: Response, next: NextFunction) => void;
}

const inventoryController: controller = {
  insertInventory: null,
};

inventoryController.insertInventory = (req, res, next) => {
  const { product_name, price, unit, total_quantity, total_reserved_quantity } =
    req.body;
  const queryString = `
    INSERT INTO inventory (product_name, price, unit, total_quantity, total_reserved_quantity)
    VALUES ('product_name','100','unit','100','100')`;
  return next();
};

export { inventoryController };
