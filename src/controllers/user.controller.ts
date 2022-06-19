import { Response, Request } from 'express';
import UserApplication from '../modules/user/application/user.application';

export default class UserController {
  constructor(private userApplication: UserApplication) {}

  getAll(req: Request, res: Response) {
    res.json({
      message: [
        {
          id: 1,
          name: 'John Doe',
          email: '',
          phone: '',
          address: ''
        },
        {
          id: 2,
          name: 'John Doe',
          email: '',
          phone: ''
        }
      ]
    });
  }
}
