import { Schema, model, Document } from 'mongoose';

interface ContinentDocument extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const continentSchema = new Schema<ContinentDocument>(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      required: [true, 'Please provide the continent name'],
    },
  },
  { timestamps: true }
);

const Continent = model<ContinentDocument>('Continent', continentSchema);

export { Continent, ContinentDocument };
