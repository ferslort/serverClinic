import { MedicModel } from '../domain/model/medics.model';
import { MedicRepository } from '../domain/repositories/medic.repositoy';

export class MedicApplication {
  constructor(private medicRepository: MedicRepository) {}

  async findAll(): Promise<MedicModel[]> {
    return await this.medicRepository.findAll();
  }
}
