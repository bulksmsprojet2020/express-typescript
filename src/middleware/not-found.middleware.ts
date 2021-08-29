import { Request, Response, NextFunction } from "express";

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  res.status(404).json({
      status: 'error',
      message: 'Resource not found or this route doesn\'t exist'
  });
};