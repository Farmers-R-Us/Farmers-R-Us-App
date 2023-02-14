import { Request, Response, NextFunction } from 'express';
const db = require('../models/model.ts');

interface controller {
  insertInventory: (req: Request, res: Response, next: NextFunction) => void;
  getInventory: (req: Request, res: Response, next: NextFunction) => void;
}

const inventoryController: controller = {
  insertInventory: null,
  getInventory: null,
};

inventoryController.insertInventory = (req, res, next) => {
  const { product_name, price, unit, total_quantity, total_reserved_quantity } =
    req.body;
  const queryString = `
    INSERT INTO inventory (product_name, price, unit, total_quantity, total_reserved_quantity)
    VALUES ('${product_name}','${price}','${unit}','${total_quantity}','${total_reserved_quantity}')`;
  db.query(queryString).then((res) => {
    console.log(res);
  });
  return next();
};

inventoryController.getInventory = (req, res, next) => {
  const queryString = `
    SELECT * FROM "inventory" ORDER BY id`;
  db.query(queryString)
    .then((response) => {
      res.locals.inventory = response.rows;
      console.log(res.locals.inventory);
      return next();
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
};

export { inventoryController };
