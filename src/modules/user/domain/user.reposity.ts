import User, { UserProperties } from './user'
// principio SOLID: inversion dependecy
export interface UserRepository {
	list(): UserProperties[]
	listOne(guid: string): User
	insert(user: User): User
	update(user: User): User
	delete(guid: string): User
}
