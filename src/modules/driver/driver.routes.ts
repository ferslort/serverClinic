import express from 'express';
import DriverApplication from './application/driver.application';
import DriverController from './driver.controller';
import DriverInfrastructure from './infrastructure/driver.infrastructure';

const infrastructure = new DriverInfrastructure();
const application = new DriverApplication(infrastructure);
const controller = new DriverController(application);

class Routes {
  router = express.Router();

  constructor() {
    this.mountRoutes();
  }

  mountRoutes() {
    this.router.post('/', controller.create.bind(controller));
  }
}

export default new Routes().router;
