import Result from '../../application/interface/result.interface';

export default interface BaseRepository<T> {
  findAll(
    where: { [key: string]: string | number | boolean },
    order: { [key: string]: string },
    relations: string[]
  ): Promise<Result<T>>;
  findOne(where: {
    [key: string]: string | number | boolean;
  }): Promise<Result<T>>;
  create(user: T): Promise<Result<T>>;
  update(
    where: { [key: string]: string | number | boolean },
    order: { [key: string]: string },
    relations: string[]
  ): Promise<Result<T>>;
  delete(where: {
    [key: string]: string | number | boolean;
  }): Promise<Result<T>>;
  getPage(
    page: number,
    pageSize: number,
    where: { [key: string]: string | number | boolean },
    order: { [key: string]: string },
    relations: string[]
  ): Promise<Result<T>>;
}
