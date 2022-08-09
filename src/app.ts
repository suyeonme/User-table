import express from 'express';
import routes from '@/routes/index';
import config from '@/config';

const startServer = async (): Promise<void> => {
  const app = express();

  app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);

    app.use('/', routes);
  });
};

startServer();
