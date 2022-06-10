import http from 'http';
import app from '../app';

export default class ServiceServer {
  initialize(): Promise<boolean | Error> {
    return new Promise((resolve, reject) => {
      const server = http.createServer(app);

      server
        .listen(3000)
        .on('error', () => {
          reject(new Error('Server error'));
        })
        .on('listening', () => {
          console.log('Server listening on port 3000');
          resolve(true);
        });
    });
  }
}
