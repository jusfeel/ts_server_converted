import { Express, Router } from 'express';
import * as express from 'express';
import { IModel } from '../models/IModel';
import { IRoutes } from './IRoutes';

export class BaseRoutes implements IRoutes {

  public router: Router;

  constructor(public model: IModel) {
    this.router = express.Router();
    this.mountRoutes();
  }

  mountRoutes() : void {
    this.router.get("/", (req, res) => {
      this.model.all(function(err: any, rows: any) {
        if (err) {
          console.error(err);
          res.status(422).send(err);
        } else {
          res.json({ data: rows.map( elem => JSON.parse(elem.data)) });
        }
      });
    });
  }
}

export default new BaseRoutes().router;
