import { AnySchema } from 'yup';
import { Request, Response, NextFunction } from 'express';

const validate =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      return next();
    } catch (e) {
      res.status(400).json({
        status: false,
        message: e.errors,
      });
    }
  };

export default validate;
