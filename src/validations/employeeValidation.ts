import { object, string } from 'yup';

// eslint-disable-next-line import/prefer-default-export
export const createEmployeeSchema = object({
  body: object({
    firstName: string().required('Please tell us your first name'),
    lastName: string().required('Please tell us your lastname.'),
    dateOfBirth: string().required('Please provide your date of birth.'),
    jobTitle: string().required('Job title is required'),
    company: string().required('Company name is required'),
  }),
});
