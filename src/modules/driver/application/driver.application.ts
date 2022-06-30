import BaseRepository from '../../../shared/domain/repositories/BaseRepository';
import DriverModel from '../domain/models/driver.model';

export default class DriverApplication {
  constructor(private driverRepository: BaseRepository<DriverModel>) {}

  findAll(): Promise<DriverModel[]> {
    return this.driverRepository.findAll();
  }

  findById(id: string): Promise<DriverModel> {
    return this.driverRepository.findById(id);
  }

  findByEmail(email: string): Promise<DriverModel> {
    return this.driverRepository.findByEmail(email);
  }

  create(driver: DriverModel): Promise<DriverModel> {
    return this.driverRepository.create(driver);
  }

  update(driver: DriverModel): Promise<DriverModel> {
    return this.driverRepository.update(driver);
  }

  delete(id: string): Promise<void> {
    return this.driverRepository.delete(id);
  }
}
