import { UserUpdate } from '../domain/interfaces/userUpdate.interface'
import User from '../domain/user'
import { UserRepository } from '../domain/user.repository'

export default class UserApplication {
	// SOLID PRINCIPAL: INVERSION DEPENDENCY
	// DESING PATTERN: INJECTION DEPENDENCY:

	constructor(private readonly userRepository: UserRepository) {}

	insert(user: User) {
		return this.userRepository.insert(user)
	}
	list() {
		return this.userRepository.list()
	}
	listOne(guid: string) {
		return this.userRepository.listOne(guid)
	}
	update(guid: string, user: Partial<UserUpdate>) {
		return this.userRepository.update(guid, user)
	}
	delete(guid: string) {
		return this.userRepository.delete(guid)
	}
}
