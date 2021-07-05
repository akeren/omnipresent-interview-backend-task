import { Request, Response } from 'express';
import { createContinent, indexContinent } from '@src/services/continentService';

// eslint-disable-next-line import/prefer-default-export
export async function store(req: Request, res: Response): Promise<void | Response> {
  try {
    const continent = await createContinent(req.body);
    res.status(201).json({
      status: true,
      message: 'Contitnet created successfully.',
      data: continent,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
}

export async function index(req: Request, res: Response): Promise<void | Response> {
  try {
    const continents = await indexContinent({});
    res.status(200).json({
      status: true,
      message: 'Continents retrieved successfully',
      data: continents,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
}
