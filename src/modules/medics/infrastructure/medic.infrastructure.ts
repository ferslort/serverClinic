import BaseInfrastructure from '../../../shared/infrastructure/base.infrastructure';
import { MedicModel } from '../domain/model/medics.model';
import { MedicRepository } from '../domain/repositories/medic.repositoy';

export class MedicInfrastructure
  extends BaseInfrastructure<MedicModel, string>
  implements MedicRepository
{
  async findByEmail(email: string): Promise<MedicModel> {
    throw new Error('Method not implemented.');
  }
}
