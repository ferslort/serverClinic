import express from 'express';

class Routes {
  router = express.Router();

  constructor() {
    this.mountRoutes();
  }

  public mountRoutes() {
    this.router.use('/', (req, res) => {
      res.json({ message: 'Desde el directori de drivers' });
    });
  }
}

export default new Routes().router;
