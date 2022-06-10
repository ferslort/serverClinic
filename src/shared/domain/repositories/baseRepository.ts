export default interface BaseRepository<T> {
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T>;
  findByEmail(email: string): Promise<T>;
  create(user: T): Promise<T>;
  update(user: T): Promise<T>;
  delete(id: string): Promise<void>;
}
