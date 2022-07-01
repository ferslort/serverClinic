import { ObjectType, Repository } from 'typeorm';
import DataBase from '../../services/database.services';
import { ResponseDto } from '../application/interface/dtos/reponse.dto';
import Result from '../application/interface/result.interface';
import * as _ from 'lodash';
import { Trace } from '../../helpers/trace';

export default abstract class BaseInfrastructure<T, U> {
  constructor(private entity: ObjectType<T>) {}

  async findAll(
    where: object,
    order: object,
    relations: string[]
  ): Promise<Result<T>> {
    const dataSource = DataBase.dataSource();
    const repository: Repository<T> = dataSource.getRepository(this.entity);

    const result = await repository.find({ where, order, relations });
    return ResponseDto<T>(Trace.trace(), result);
  }

  async findOne(where: object): Promise<Result<T>> {
    const dataSource = DataBase.dataSource();
    const repository: Repository<T> = dataSource.getRepository(this.entity);

    const recordFind = await repository.findOne({ where });

    if (!recordFind) {
      throw new Error('Record not found');
    }

    return ResponseDto<T>(Trace.trace(), recordFind);
  }

  async create(model: T): Promise<Result<T>> {
    const dataSource = DataBase.dataSource();
    const repository: Repository<T> = dataSource.getRepository(this.entity);

    const result = await repository.save(model);
    return ResponseDto<T>(Trace.trace(), result);
  }

  async update(
    model: Partial<T>,
    where: object,
    relations: string[] = []
  ): Promise<Result<T>> {
    const dataSource = DataBase.dataSource();
    const repository: Repository<T> = dataSource.getRepository(this.entity);

    let recordToUpdate = await repository.findOne({ where, relations });

    recordToUpdate = _.merge(recordToUpdate, model);
    await repository.save(recordToUpdate);

    return ResponseDto<T>(Trace.trace(), recordToUpdate);
  }

  async delete(where: object): Promise<Result<T>> {
    const dataSource = DataBase.dataSource();
    const repository: Repository<T> = dataSource.getRepository(this.entity);

    let recordToDelete = await repository.findOne({ where });

    recordToDelete = _.merge(recordToDelete, { active: false });
    await repository.save(recordToDelete);

    return ResponseDto<T>(Trace.trace(), recordToDelete);
  }

  async getPage(
    page: number,
    pageSize: number,
    where: object,
    order: object,
    relations: string[]
  ): Promise<Result<T>> {
    const dataSource = DataBase.dataSource();
    const repository: Repository<T> = dataSource.getRepository(this.entity);

    const [data, total] = await repository.findAndCount({
      skip: (page - 1) * pageSize,
      take: pageSize,
      where,
      order,
      relations
    });

    return ResponseDto<T>(Trace.trace(), data, total);
  }
}
