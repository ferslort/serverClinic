import express from 'express';
import UserController from '../../controllers/user.controller';
import UserApplication from './application/user.application';
import UserInfrastructure from './infrastructure/user.infrastructure';

const infrastructure = new UserInfrastructure();
const application = new UserApplication(infrastructure);
const controller = new UserController(application);

class Routes {
  router = express.Router();

  constructor() {
    this.mountRoutes();
  }

  mountRoutes() {
    this.router.get('/', controller.getAll.bind(controller));
  }
}

export default new Routes().router;
