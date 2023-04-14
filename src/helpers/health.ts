import { Router, Request, Response } from 'express'

class RouterHealth {
	readonly expressRouter: Router

	constructor() {
		this.expressRouter = Router()
		this.mountRoutes()
	}

	mountRoutes() {
		this.expressRouter.get('/', (_req: Request, res: Response) => res.send('All is Ok'))
	}
}

export default new RouterHealth().expressRouter


// req.params || req.query (formato json)
// req.headers || (formato json)
// req.body || (no viene en formato json)