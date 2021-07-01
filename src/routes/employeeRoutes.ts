import { Router } from 'express';
import validateRequest from '@src/middlewares/validateRequestMiddleware';
import { store } from '@src/controllers/employeeController';
import { createEmployeeSchema } from '@src/validations/employeeValidation';

const router = Router();

router.route('/').post(validateRequest(createEmployeeSchema), store);

export default router;
