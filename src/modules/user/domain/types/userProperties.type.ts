import { UserOpcional } from '../interfaces/userOptional.interface'
import { UserRequired } from '../interfaces/userRequiered.interface'

export type UserProperties = Required<UserRequired> & Partial<UserOpcional>
