import BaseRepository from '../../../shared/domain/repositories/BaseRepository';
import UserModel from '../domain/models/user.model';

export default class UserApplication {
  constructor(private userRepostory: BaseRepository<UserModel>) {}

  async findAll(): Promise<UserModel[]> {
    return await this.userRepostory.findAll();
  }

  async findById(id: string): Promise<UserModel> {
    return await this.userRepostory.findById(id);
  }

  async findByEmail(email: string): Promise<UserModel> {
    return await this.userRepostory.findByEmail(email);
  }

  async create(user: UserModel): Promise<UserModel> {
    return await this.userRepostory.create(user);
  }

  async update(user: UserModel): Promise<UserModel> {
    return await this.userRepostory.update(user);
  }

  async delete(id: string): Promise<void> {
    return await this.userRepostory.delete(id);
  }
}
