import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const mongod = new MongoMemoryServer();

export const connect = async (): Promise<void> => {
  await mongod.start();
  const uri = mongod.getUri();
  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };
  await mongoose.connect(uri, mongooseOpts);
};

export const closeDatabase = async (): Promise<void> => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
};

export const clearDatabase = async (): Promise<void> => {
  const { collections } = mongoose.connection;
  const collects = Object.values(collections);
  collects.forEach(async collection => {
    await collection.deleteMany({});
  });
};
