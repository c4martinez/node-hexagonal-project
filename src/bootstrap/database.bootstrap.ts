import { DataSource } from 'typeorm'
import { Bootstrap } from './base.bootstrap'
import { UserEntity } from '../modules/user/infraestructure/user.entity'

let appDataSource: DataSource

export default class extends Bootstrap {

  initialize(): Promise<DataSource> {
    const AppDataSource = new DataSource({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'user',
      password: '0411',
      database: 'cursonode',
      synchronize: true,
      logging: true,
      entities: [UserEntity],
      migrations: [],
      subscribers: [],
    })

    appDataSource = AppDataSource

    return AppDataSource.initialize()
  }

  static get dataSource(): DataSource {
    return appDataSource
  }
}