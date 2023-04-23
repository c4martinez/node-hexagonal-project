import User from './user'
// principio SOLID: inversion dependecy
export interface UserRepository {
	// desing pattern Facede: https://refactoring.guru/es/design-patterns/facade
	list(): Promise<User[]>
	listOne(guid: string): Promise <User>
	insert(user: User): Promise <User>
	update(user: User): Promise <User>
	delete(guid: string): Promise <User>
}
