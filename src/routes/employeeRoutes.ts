import { Router } from 'express';
import validateRequest from '@src/middlewares/validateRequestMiddleware';
import { store, index } from '@src/controllers/employeeController';
import { createEmployeeSchema } from '@src/validations/employeeValidation';

const router = Router();

router.route('/').post(validateRequest(createEmployeeSchema), store).get(index);

export default router;
