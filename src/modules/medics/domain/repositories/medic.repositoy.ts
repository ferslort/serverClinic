import BaseRepository from '../../../../shared/domain/repositories/BaseRepository';
import { MedicModel } from '../model/medics.model';

export interface MedicRepository extends BaseRepository<MedicModel> {
  findByEmail(email: string): Promise<MedicModel>;
}
