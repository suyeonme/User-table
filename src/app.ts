import express from 'express';
import loaders from '@/loaders/index';
import config from '@/config/config';
import { logger } from '@/config/winston';

export const app = express();

const startServer = async (): Promise<void> => {
  await loaders({ app });

  if (config.NODE_ENV !== 'test') {
    app.listen(config.PORT, () => {
      logger.info(`Server is running on port ${config.PORT}`);
    });
  }
};

startServer();
