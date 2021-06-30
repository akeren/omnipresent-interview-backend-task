import { connect } from 'mongoose';

const dbUri = process.env.MONGODB_URL;

(async (): Promise<void> => {
  try {
    if (dbUri) {
      await connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      });
      // console.log('DB connection established!');
    }
  } catch (error) {
    console.error(error);
  }
})();
