import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from '@/routes/index';

export default async ({ app }: { app: express.Application }) => {
  //   app.get('/status', (req, res) => { res.status(200).end(); });
  //   app.head('/status', (req, res) => { res.status(200).end(); });
  //   app.enable('trust proxy');

  app.use(cors());
  // app.use(require('morgan')('dev'));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use('/', routes);
  return app;
};
