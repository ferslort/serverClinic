import Result from '../../../shared/application/interface/result.interface';
import BaseRepository from '../../../shared/domain/repositories/BaseRepository';
import UserModel from '../domain/models/user.model';

export default class UserApplication {
  constructor(private userRepostory: BaseRepository<UserModel>) {}

  findAll(): Promise<Result<UserModel>> {
    return this.userRepostory.findAll({}, {}, []);
  }

  findById(id: string): Promise<Result<UserModel>> {
    return this.userRepostory.findOne({});
  }

  create(driver: UserModel): Promise<Result<UserModel>> {
    return this.userRepostory.create(driver);
  }

  update(driver: UserModel): Promise<Result<UserModel>> {
    return this.userRepostory.update({}, {}, []);
  }

  delete(id: string): Promise<Result<UserModel>> {
    return this.userRepostory.delete({});
  }
}
