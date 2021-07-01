import { Request, Response } from 'express';
import { createEmployee } from '@src/services/employeeService';

// eslint-disable-next-line import/prefer-default-export
export async function store(req: Request, res: Response): Promise<void> {
  try {
    const employee = await createEmployee(req.body);

    res.status(201).json({
      status: true,
      message: 'Employee created successfully',
      data: employee,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
}
