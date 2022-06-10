import BaseInfrastructure from '../../../shared/infrastructure/base.infrastructure';
import UserModel from '../domain/models/user.model';
import UserRepository from '../domain/repositories/user.repository';

export default class UserInfrastructure
  extends BaseInfrastructure<UserModel, string>
  implements UserRepository
{
  create(user: UserModel): Promise<UserModel> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findAll(): Promise<UserModel[]> {
    throw new Error('Method not implemented.');
  }

  findById(id: string): Promise<UserModel> {
    throw new Error('Method not implemented.');
  }

  findByEmail(email: string): Promise<UserModel> {
    throw new Error('Method not implemented.');
  }

  update(user: UserModel): Promise<UserModel> {
    throw new Error('Method not implemented.');
  }
}
