import { IModel } from '../models/IModel';
import { Router } from 'express';

export interface IRoutes {
  model: IModel;
  router: Router;

  mountRoutes(): void;
}
