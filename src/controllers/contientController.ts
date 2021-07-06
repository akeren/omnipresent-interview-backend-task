import { Request, Response } from 'express';
import { createContinent, indexContinent } from '@src/services/continentService';
import errorResponse from '@src/utils/errorResponse';
import successResponse from '@src/utils/successResponse';

// eslint-disable-next-line import/prefer-default-export
export async function store(req: Request, res: Response): Promise<void | Response> {
  try {
    const continent = await createContinent(req.body);

    successResponse(continent, 'Contitnet created successfully.', 201, res);
  } catch (error) {
    errorResponse(error, 400, res);
  }
}

export async function index(req: Request, res: Response): Promise<void | Response> {
  try {
    const continents = await indexContinent({});

    successResponse(continents, 'Continents retrieved successfully', 200, res);
  } catch (error) {
    errorResponse(error, 400, res);
  }
}
