import BaseInfrastructure from '../../../shared/infrastructure/base.infrastructure';
import DriverModel from '../domain/models/driver.model';
import { DriverRepository } from '../domain/repositories/driver.repository';

export default class DriverInfrastructure
  extends BaseInfrastructure<DriverModel, string>
  implements DriverRepository
{
  async findAll(): Promise<DriverModel[]> {
    throw new Error('Method not implemented.');
  }
}
