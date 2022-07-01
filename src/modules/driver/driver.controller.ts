import { Request, Response } from 'express';
import DriverApplication from './application/driver.application';
import DriverFactory from './domain/models/driver.factory';

export default class DriverController {
  constructor(private driverApplication: DriverApplication) {}

  create(req: Request, res: Response) {
    try {
      const driver = new DriverFactory().create(req.body);

      const result = this.driverApplication.create(driver);

      res.json(result);
    } catch (error) {
      res.json(error);
    }
  }

  async findAll(_req: Request, res: Response) {
    try {
      const result = await this.driverApplication.findAll(
        { isActive: true },
        {},
        []
      );
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  }
}
