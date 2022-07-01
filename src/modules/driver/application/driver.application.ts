import Result from '../../../shared/application/interface/result.interface';
import BaseRepository from '../../../shared/domain/repositories/BaseRepository';
import DriverModel from '../domain/models/driver.model';

export default class DriverApplication {
  constructor(private driverRepository: BaseRepository<DriverModel>) {}

  findAll(): Promise<Result<DriverModel>> {
    return this.driverRepository.findAll({}, {}, []);
  }

  findById(id: string): Promise<Result<DriverModel>> {
    return this.driverRepository.findOne({});
  }

  create(driver: DriverModel): Promise<Result<DriverModel>> {
    return this.driverRepository.create(driver);
  }

  update(driver: DriverModel): Promise<Result<DriverModel>> {
    return this.driverRepository.update({}, {}, []);
  }

  delete(id: string): Promise<Result<DriverModel>> {
    return this.driverRepository.delete({});
  }
}
