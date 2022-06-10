import app from './src/app';
import ServiceServer from './src/services/service.server';

(async () => {
  const server = new ServiceServer();

  try {
    await server.initialize();
  } catch (error) {
    console.log(error);
  }
})();
