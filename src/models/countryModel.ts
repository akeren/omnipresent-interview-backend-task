import { Schema, model, Document } from 'mongoose';

interface CountryDocument extends Document {
  name: string;
  currency: string;
  languages: Array<string>;
  timezones: Array<string>;
  createdAt: Date;
  updatedAt: Date;
}

const countrySchema = new Schema<CountryDocument>(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Please provide the country name'],
    },
    currency: {
      type: String,
      trim: true,
      required: [true, 'Please provide the currency'],
    },
    languages: [
      {
        type: {
          type: String,
          default: 'National',
          enum: ['Local', 'National'],
        },
        name: String,
      },
    ],
    timezones: [String],
  },
  { timestamps: true }
);

const Country = model<CountryDocument>('Country', countrySchema);

export { Country, CountryDocument };
