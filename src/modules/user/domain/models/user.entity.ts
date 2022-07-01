import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'user' })
export default class UserEntity {
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
    type: 'boolean',
    default: true
  })
  active!: boolean;
}
