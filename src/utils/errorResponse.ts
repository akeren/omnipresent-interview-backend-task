import { Response } from 'express';

const errorResponse = (error: any, statusCode: number, res: Response): Response => {
  return res.status(statusCode).json({
    status: false,
    message: error.message,
  });
};

export default errorResponse;
