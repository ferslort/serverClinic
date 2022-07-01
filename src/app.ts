import express, { Application } from 'express';
import routesUser from './modules/user/users.routes';
import routesDriver from './modules/driver/driver.routes';

class App {
  expressApp: Application;

  constructor() {
    this.expressApp = express();
    this.middlewares();
    this.mountRoutes();
  }

  mountRoutes() {
    this.expressApp.use('/users', routesUser);
    this.expressApp.use('/driver', routesDriver);
  }

  middlewares() {
    this.expressApp.use(express.json());
    this.expressApp.use(express.urlencoded({ extended: true }));
  }
}

export default new App().expressApp;
