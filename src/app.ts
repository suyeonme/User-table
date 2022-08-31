import express from 'express';
import loaders from '@/loaders';
import config from '@/config/config';
import { logger } from '@/config/winston';

const startServer = async (): Promise<void> => {
  const app = express();
  await loaders({ app });

  app.listen(config.PORT, () => {
    logger.info(`Server is running on port ${config.PORT}`);
  });
};

startServer();
