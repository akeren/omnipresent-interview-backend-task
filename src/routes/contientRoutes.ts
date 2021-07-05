import { Router } from 'express';
import validateRequest from '@src/middlewares/validateRequestMiddleware';
import { store, index } from '@src/controllers/contientController';
import { createContinentSchema } from '@src/validations/continentValidation';

const router = Router();

router.route('/').post(validateRequest(createContinentSchema), store).get(index);

export default router;
