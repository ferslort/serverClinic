import BaseInfrastructure from '../../../shared/infrastructure/base.infrastructure';
import { DriverEntity } from '../domain/models/driver.entity';
import DriverModel from '../domain/models/driver.model';
import { DriverRepository } from '../domain/repositories/driver.repository';

export default class DriverInfrastructure
  extends BaseInfrastructure<DriverModel, string>
  implements DriverRepository
{
  constructor() {
    super(DriverEntity);
  }
}
