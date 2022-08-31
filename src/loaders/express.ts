import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import routes from '@/routes/index';
import config from '@/config/config';
import { stream } from '@/config/winston';

const isProduction = config.NODE_ENV === 'production';

export default async ({ app }: { app: express.Application }) => {
  //   app.enable('trust proxy');

  app.use(cors());
  app.use(morgan(isProduction ? 'combined' : 'dev', { stream }));

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use('/', routes);
  return app;
};
