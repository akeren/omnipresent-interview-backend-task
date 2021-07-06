import { Response } from 'express';

const successResponse = (data: any = null, message: string, statusCode: number, res: Response): Response => {
  return res.status(statusCode).json({
    status: true,
    message,
    data,
  });
};

export default successResponse;
