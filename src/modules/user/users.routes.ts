import express from 'express';

class Routes {
  router = express.Router();

  constructor() {
    this.mountRoutes();
  }

  mountRoutes() {
    this.router.get('/', (req, res) => {
      res.json({ message: 'Desde el directori de usuarios' });
    });
  }
}

export default new Routes().router;
