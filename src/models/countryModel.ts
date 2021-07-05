import { Schema, model, Document } from 'mongoose';
import { ContinentDocument } from '@src/models/continentModel';

interface CountryDocument extends Document {
  name: string;
  currency: string;
  languages: Array<string>;
  timezones: Array<string>;
  contient: ContinentDocument['_id'];
  createdAt: Date;
  updatedAt: Date;
}

const countrySchema = new Schema<CountryDocument>(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'Please provide the country name'],
    },
    currency: {
      type: String,
      trim: true,
      unique: true,
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
    continent: {
      type: Schema.Types.ObjectId,
      ref: 'Continent',
      required: [true, 'Continent is required'],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// eslint-disable-next-line func-names
countrySchema.pre(/^find/, function (next) {
  this.populate({
    path: 'continent',
    select: 'name',
  });

  next();
});

const Country = model<CountryDocument>('Country', countrySchema);

export { Country, CountryDocument };
