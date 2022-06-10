export default abstract class BaseInfrastructure<T, U> {
  async findAll(): Promise<T[]> {
    throw new Error('Method not implemented.');
  }

  async findById(id: U): Promise<T> {
    throw new Error('Method not implemented.');
  }

  async findByEmail(email: U): Promise<T> {
    throw new Error('Method not implemented.');
  }

  async create(driver: T): Promise<T> {
    throw new Error('Method not implemented.');
  }

  async update(driver: T): Promise<T> {
    throw new Error('Method not implemented.');
  }

  async delete(id: U): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
