import { DocumentDefinition, Document, FilterQuery } from 'mongoose';
import { Continent, ContinentDocument } from '@src/models/continentModel';

// eslint-disable-next-line import/prefer-default-export
export async function createContinent(input: DocumentDefinition<ContinentDocument>): Promise<Document> {
  try {
    return Continent.create(input);
  } catch (error) {
    throw new Error(error);
  }
}

export async function indexContinent(query: FilterQuery<ContinentDocument>): Promise<typeof Continent> {
  try {
    return await Continent.find(query).lean();
  } catch (error) {
    throw new Error(error);
  }
}
