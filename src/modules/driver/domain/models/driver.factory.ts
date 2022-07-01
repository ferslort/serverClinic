import DriverModel from './driver.model';

export default class DriverFactory {
  create(driver: DriverModel) {
    const id = driver.id || '0';
    const name = driver.name;
    const lastName = driver.lastname;
    const licenseDriver = driver.licenseDriver;
    const active = driver.isActive || true;

    if (!driver.name) {
      throw new Error('Driver name is required');
    }

    if (!driver.lastname) {
      throw new Error('Driver lastname is required');
    }

    return new DriverModel(id, name, lastName, licenseDriver, active);
  }
}
