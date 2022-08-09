import express from 'express';
import dotenv from 'dotenv';
import routes from '@src/routes';

dotenv.config({ path: 'config/.env' });

const startServer = async (): Promise<void> => {
  const app = express();

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);

    app.use('/', routes);
  });
};

startServer();
