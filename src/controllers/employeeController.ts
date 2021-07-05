import { Request, Response } from 'express';
import { createEmployee, indexEmployee } from '@src/services/employeeService';

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

export async function index(req: Request, res: Response): Promise<void | Response> {
  try {
    const employees = await indexEmployee({});
    res.status(200).json({
      status: true,
      message: 'Employees retrieved successfully',
      data: employees,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
}
