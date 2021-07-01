import { DocumentDefinition, Document } from 'mongoose';
import { Employee, EmployeeDocument } from '@src/models/employeeModel';

// eslint-disable-next-line import/prefer-default-export
export async function createEmployee(input: DocumentDefinition<EmployeeDocument>): Promise<Document> {
  try {
    return await Employee.create(input);
  } catch (error) {
    throw new Error(error);
  }
}
