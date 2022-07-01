import express from 'express';
import UserApplication from './application/user.application';
import UserInfrastructure from './infrastructure/user.infrastructure';
import UserController from './user.controller';

const infrastructure = new UserInfrastructure();
const application = new UserApplication(infrastructure);
const controller = new UserController(application);

class Routes {
  router = express.Router();

  constructor() {
    this.mountRoutes();
  }

  mountRoutes() {}
}

export default new Routes().router;
