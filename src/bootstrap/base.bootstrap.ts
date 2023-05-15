import { DataSource } from 'typeorm/data-source'
export abstract class Bootstrap {
	// desing pattern Facede: https://refactoring.guru/es/design-patterns/facade
	abstract initialize(): Promise<string | Error | DataSource>
}

// export interface Bootstrap {
//     initialize(): Promise<string | Error> 
// }

// cuando es interfas es IMPLEMENT y cuando es class es HERENCIA
