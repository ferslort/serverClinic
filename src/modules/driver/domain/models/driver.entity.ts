import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'driver' })
export class DriverEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({
    type: 'varchar',
    length: 100
  })
  name!: string;

  @Column({
    type: 'varchar',
    length: 100
  })
  lastName!: string;

  @Column({
    type: 'varchar',
    length: 100
  })
  licenseDriver!: string;

  @Column({
    type: 'boolean',
    default: true
  })
  active!: boolean;
}
