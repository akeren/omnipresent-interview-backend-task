import { object, string } from 'yup';

// eslint-disable-next-line import/prefer-default-export
export const createContinentSchema = object({
  body: object({
    name: string().required('Continent name is required'),
  }),
});
