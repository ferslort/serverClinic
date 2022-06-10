import BaseRepository from '../../../../shared/domain/repositories/BaseRepository';
import UserModel from '../models/user.model';

export default interface UserRepository extends BaseRepository<UserModel> {}
