import { Request, Response } from 'express';
import { createEmployee, indexEmployee } from '@src/services/employeeService';
import errorResponse from '@src/utils/errorResponse';
import successResponse from '@src/utils/successResponse';

// eslint-disable-next-line import/prefer-default-export
export async function store(req: Request, res: Response): Promise<void | Response> {
  try {
    const employee = await createEmployee(req.body);

    successResponse(employee, 'Employee created successfully', 201, res);
  } catch (error) {
    errorResponse(error, 400, res);
  }
}

export async function index(req: Request, res: Response): Promise<void | Response> {
  try {
    const employees = await indexEmployee({});

    successResponse(employees, 'Employees retrieved successfully', 200, res);
  } catch (error) {
    errorResponse(error, 400, res);
  }
}
