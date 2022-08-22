import express from 'express';
import loaders from '@/loaders';
import config from '@/config';

const startServer = async (): Promise<void> => {
  const app = express();
  await loaders({ app });

  app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
  });
};

startServer();

