import { Request, Response } from 'express';
import DriverApplication from './application/driver.application';
import DriverFactory from './domain/models/driver.factory';

export default class DriverController {
  constructor(private driverApplication: DriverApplication) {}

  create(req: Request, res: Response) {
    try {
      const driver = new DriverFactory().create(req.body);

      return this.driverApplication.create(driver);
    } catch (error) {
      res.json(error);
    }
  }
}
