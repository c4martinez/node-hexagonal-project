import { Result } from 'neverthrow'
import User from './user'
import { UserNotFoundException } from './exceptions/user.exception'
import { UserUpdate } from './interfaces/userUpdate.interface'
// principio SOLID: inversion dependecy
export interface UserRepository {
	// desing pattern Facede: https://refactoring.guru/es/design-patterns/facade
	insert(user: User): Promise <User>
	list(): Promise<User[]>
	listOne(guid: string): Promise <Result<User, UserNotFoundException>>
	update(guid: string, user: Partial<UserUpdate>): Promise <Result<User, UserNotFoundException>>
	delete(guid: string): Promise <Result<User, UserNotFoundException>>
}
