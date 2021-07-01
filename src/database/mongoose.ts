import { connect } from 'mongoose';
import log from '@src/log/logger';

(async (): Promise<void> => {
  try {
    await connect(process.env.MONGODB_URL as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    log.info('DB connection established!');
  } catch (error) {
    log.error('DB connection error', error);
    process.exit(1);
  }
})();
