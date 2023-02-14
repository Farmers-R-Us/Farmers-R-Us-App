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

reservedController.insertReserved = (req, res, next) => {};

reservedController.getReserved = (req, res, next) => {
    
}

export { reservedController };
