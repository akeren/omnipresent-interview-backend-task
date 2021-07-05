import { DocumentDefinition, Document, FilterQuery, QueryOptions } from 'mongoose';
import { Country, CountryDocument } from '@src/models/countryModel';

// eslint-disable-next-line import/prefer-default-export
export async function createCountry(input: DocumentDefinition<CountryDocument>): Promise<Document> {
  try {
    return await Country.create(input);
  } catch (error) {
    throw new Error(error);
  }
}

export async function indexCountry(query: FilterQuery<CountryDocument>): Promise<typeof Country> {
  try {
    return await Country.find(query).lean();
  } catch (error) {
    throw new Error(error);
  }
}
