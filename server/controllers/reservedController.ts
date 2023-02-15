import { Request, Response, NextFunction } from 'express';
const db = require('../models/model.ts');

interface controller {
  insertReserved: (req: Request, res: Response, next: NextFunction) => void;
  getReserved: (req: Request, res: Response, next: NextFunction) => void;
}

const reservedController: controller = {
  insertReserved: null,
  getReserved: null,
};

reservedController.insertReserved = (req, res, next) => {
  console.log(req.body);
  const date = new Date().toLocaleString();
  console.log(date);
  const { product_id, quantity, user_id } = req.body;
  const insertString = `
      INSERT INTO reserved_products (product_id, quantity, user_id, reserved_at)
      VALUES ('${product_id}','${quantity}','${user_id}','${date}')`;
  db.query(insertString).then((response) => {
    // console.log(response);
  });
  const productString = `
      SELECT * FROM "inventory" WHERE id = $1`;
  db.query(productString, [product_id]).then((response) => {
    // console.log(response.rows[0].total_reserved_quantity);
    const total_reserved_quantity = response.rows[0].total_reserved_quantity;
    const total_reserved = total_reserved_quantity + Number(quantity);
    console.log('This is total: ', total_reserved);
    const updateString = `
    UPDATE inventory
    SET total_reserved_quantity = '${total_reserved}'
    WHERE id = $1`;
    db.query(updateString, [product_id]).then((response) => {
      console.log(response);
      return next();
    });
  });
};

reservedController.getReserved = (req, res, next) => {
  const queryString = `
    SELECT r.id, i.product_name, r.quantity, u.gmail, u.isadmin, r.reserved_at FROM "reserved_products" r 
    JOIN "inventory" i ON r.product_id = i.id 
    JOIN "users" u ON r.user_id = u.id 
    ORDER BY r.id`;
  db.query(queryString).then((response) => {
    res.locals.reserved = response.rows;
    return next();
  });
};

export { reservedController };
