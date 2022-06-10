import express, { Application } from 'express';
import routesUser from './modules/user/users.routes';
import routesDriver from './modules/driver/driver.routes';

class App {
  expressApp: Application;

  constructor() {
    this.expressApp = express();
    this.mountRoutes();
  }

  public mountRoutes() {
    this.expressApp.use('/users', routesUser);
    this.expressApp.use('/drivers', routesDriver);
  }
}

export default new App().expressApp;
