import { connect } from 'mongoose';

(async (): Promise<void> => {
  try {
    await connect(process.env.MONGODB_URL as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('DB connection established!');
  } catch (error) {
    console.error(error);
  }
})();
