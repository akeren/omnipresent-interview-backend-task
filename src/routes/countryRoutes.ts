import { Router } from 'express';
import validateRequest from '@src/middlewares/validateRequestMiddleware';
import { createCountrySchema } from '@src/validations/countryValidation';
import { store, index } from '@src/controllers/countryController';

const router = Router();

router.route('/').post(validateRequest(createCountrySchema), store).get(index);

export default router;
