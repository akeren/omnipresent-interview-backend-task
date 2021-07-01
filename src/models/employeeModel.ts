import { Schema, model, Document } from 'mongoose';
import { CountryDocument } from '@src/models/countryModel';

interface EmployeeDocument extends Document {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  jobTitle: string;
  company: string;
  country: CountryDocument['_id'];
  createdAt: Date;
  updatedAt: Date;
}

const employeeSchema = new Schema<EmployeeDocument>(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, 'Please tell us your first name'],
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, 'Please tell us your lastname.'],
    },
    dateOfBirth: {
      type: String,
      required: [true, 'Please provide your date of birth.'],
    },
    jobTitle: {
      type: String,
      trim: true,
      required: [true, 'Please provide your job title.'],
    },
    company: {
      type: String,
      trim: true,
      required: [true, 'Please provide your company name.'],
    },
    country: {
      type: Schema.Types.ObjectId,
      ref: 'Country',
    },
  },
  {
    timestamps: true,
  }
);

const Employee = model<EmployeeDocument>('Employee', employeeSchema);

export { Employee, EmployeeDocument };
