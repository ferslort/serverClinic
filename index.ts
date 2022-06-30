import Server from './src/services/server.services';
import DataBase from './src/services/database.services';

const server = new Server();
const dataBase = new DataBase();

(async () => {
  try {
    const [statusServer, statusDatabase] = await Promise.all([
      server.initialize(),
      dataBase.initialize()
    ]);

    console.log({ statusServer, statusDatabase });
  } catch (error) {
    console.log(error);
  }
})();
