import { Request, Response } from 'express';
import { createCountry, indexCountry } from '@src/services/countryService';
import successResponse from '@src/utils/successResponse';
import errorResponse from '@src/utils/errorResponse';

// eslint-disable-next-line import/prefer-default-export
export async function store(req: Request, res: Response): Promise<void | Response> {
  try {
    const country = await createCountry(req.body);

    successResponse(country, 'Country created successfully', 201, res);
  } catch (error) {
    errorResponse(error, 400, res);
  }
}

export async function index(req: Request, res: Response): Promise<void | Response> {
  try {
    const countries = await indexCountry({});

    successResponse(countries, 'Countries retrieved successfully', 200, res);
  } catch (error) {
    errorResponse(error, 400, res);
  }
}
