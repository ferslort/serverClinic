import BaseRepository from '../../../shared/domain/repositories/BaseRepository';
import DriverModel from '../domain/models/driver.model';

export default class DriverApplication {
  constructor(private driverRepository: BaseRepository<DriverModel>) {}

  async findAll(): Promise<DriverModel[]> {
    return await this.driverRepository.findAll();
  }

  async findById(id: string): Promise<DriverModel> {
    return await this.driverRepository.findById(id);
  }

  async findByEmail(email: string): Promise<DriverModel> {
    return await this.driverRepository.findByEmail(email);
  }

  async create(driver: DriverModel): Promise<DriverModel> {
    return await this.driverRepository.create(driver);
  }

  async update(driver: DriverModel): Promise<DriverModel> {
    return await this.driverRepository.update(driver);
  }

  async delete(id: string): Promise<void> {
    return await this.driverRepository.delete(id);
  }
}
