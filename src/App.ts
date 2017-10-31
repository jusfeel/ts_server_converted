import * as express from 'express';
import { Express } from 'express';

import { homeRouter } from './routes/HomeRoutes';
import { systemRouter } from './routes/SystemRoutes';

export class App {

  public express: Express;

  constructor () {
    this.express = express();
    this.express.use('/', homeRouter);
    this.express.use('/systems', systemRouter);
  }
}
