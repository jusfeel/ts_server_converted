import { Express, Router } from 'express';
import * as express from 'express';
import { BaseRoutes } from '../routes/BaseRoutes';
import { SystemModel } from '../models/SystemModel';

class SystemRoutes extends BaseRoutes {
  constructor(public model: SystemModel) {
		super(model);
	}
}

export const systemRouter = new SystemRoutes(new SystemModel()).router;
