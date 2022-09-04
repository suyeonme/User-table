import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '@/swagger/swagger.json';
import routes from '@/routes/index';
import config from '@/config/config';
import { stream } from '@/config/winston';

const isProduction = config.NODE_ENV === 'production';

export default async ({ app }: { app: express.Application }) => {
  app.use(cors());
  app.use(morgan(isProduction ? 'combined' : 'dev', { stream }));

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.use('/', routes);
  return app;
};
