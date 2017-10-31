import * as express from 'express';

import { Express, Router } from 'express';

export class HomeRoutes {

	public router: Router;

	constructor() {
    this.router = express.Router();
		this.mountRoutes();
	}

	mountRoutes() : void {
	    this.router.get("/", (req, res) => {
	      res.json({
	        message: 'get response for home routes'
	      });
	    });
	}
}

export const homeRouter = new HomeRoutes().router;
