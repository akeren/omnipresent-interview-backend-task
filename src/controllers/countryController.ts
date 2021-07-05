import { Request, Response } from 'express';
import { createCountry, indexCountry } from '@src/services/countryService';

// eslint-disable-next-line import/prefer-default-export
export async function store(req: Request, res: Response): Promise<void | Response> {
  try {
    const country = await createCountry(req.body);
    res.status(201).json({
      status: true,
      message: 'Country created successfully',
      data: country,
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
    const countries = await indexCountry({});
    res.status(200).json({
      status: true,
      message: 'Countries retrieved successfully',
      data: countries,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
}
