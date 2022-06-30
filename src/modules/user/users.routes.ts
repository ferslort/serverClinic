import express from 'express';
import UserApplication from './application/user.application';
import UserInfrastructure from './infrastructure/user.infrastructure';

const infrastructure = new UserInfrastructure();
const application = new UserApplication(infrastructure);

class Routes {
  router = express.Router();

  constructor() {
    this.mountRoutes();
  }

  mountRoutes() {}
}

export default new Routes().router;
