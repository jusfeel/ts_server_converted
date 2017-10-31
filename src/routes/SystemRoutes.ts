import { Express, Router } from 'express';
import * as express from 'express';
import { BaseRoutes } from '../routes/BaseRoutes';
import { SystemModel } from '../models/SystemModel';

export class SystemRoutes extends BaseRoutes {

  model: SystemModel = new SystemModel();

  constructor() {
		super();
	}

}

export const systemRouter = new SystemRoutes().router;
