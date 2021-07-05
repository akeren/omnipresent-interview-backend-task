import { object, string, array } from 'yup';

// eslint-disable-next-line import/prefer-default-export
export const createCountrySchema = object({
  body: object({
    name: string().required('Please provide the country name'),
    currency: string().required('Please provide the currency'),
    languages: array(),
    timezones: array(),
    continent: string().required('Continent is required'),
  }),
});
