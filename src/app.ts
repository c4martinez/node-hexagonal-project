import express, { Application } from 'express'
import routerHealth from './helpers/health'
import HandlerErrors from './helpers/errors'
import routerUser from './modules/user/interfaces/http/user.routes'

class App {
	readonly expressApp: Application

	constructor() {
		this.expressApp = express()
		this.mountHealthCheck()
		this.mountMiddlewares()
		this.mountRoutes()
		this.mountError()
	}

	//principio SOLID:  Open/Close
	mountHealthCheck() {
		this.expressApp.use('/', routerHealth)
	}

	mountMiddlewares() {
		this.expressApp.use(express.json())
		this.expressApp.use(express.urlencoded({ extended: true }))
	}

	mountRoutes(): void {
		this.expressApp.use('/user', routerUser)
	}

	mountError(): void {
		this.expressApp.use(HandlerErrors.notFound)
	}
}

export default new App().expressApp
