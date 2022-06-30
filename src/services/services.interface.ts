import { DataSource } from 'typeorm';

export interface ServiceInterface {
  initialize(): Promise<boolean | Error | DataSource>;
}
