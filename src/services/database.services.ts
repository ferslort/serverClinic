import { DataSourceOptions, DataSource } from 'typeorm';
import { ServiceInterface } from './services.interface';

let source: DataSource;

export default class DataBase implements ServiceInterface {
  static dataSource() {
    return source;
  }

  initialize(): Promise<boolean | Error | DataSource> {
    const paramsConnection = {
      type: 'mysql',
      host: 'localhost',
      port: 5200,
      username: 'root',
      password: '12345',
      entities: ['src/**/*.entity.ts'],
      database: 'dbnode',
      synchronize: true,
      logging: false
    } as DataSourceOptions;

    const dataSource = new DataSource(paramsConnection);

    source = dataSource;

    return dataSource.initialize();
  }
}
