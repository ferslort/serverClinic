import DataBase from '../../../services/database.services';
import BaseInfrastructure from '../../../shared/infrastructure/base.infrastructure';
import { DriverEntity } from '../domain/models/driver.entity';
import DriverModel from '../domain/models/driver.model';
import { DriverRepository } from '../domain/repositories/driver.repository';

export default class DriverInfrastructure
  extends BaseInfrastructure<DriverModel, string>
  implements DriverRepository
{
  async findAll(): Promise<DriverModel[]> {
    throw new Error('Method not implemented.');
  }

  async create(driver: DriverModel): Promise<DriverModel> {
    const dataSource = DataBase.dataSource();
    const repository = dataSource.getRepository(DriverEntity);

    return repository.save(driver);
  }
}
