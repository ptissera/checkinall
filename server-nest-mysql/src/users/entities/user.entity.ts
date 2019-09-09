import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  displayName: String;
  
  @Column({ length: 100 })
  email: String;

  @Column({ length: 200 })
  password: String;

  @Column({ length: 500 })
  image: String;

  @Column()
  isAdmin: Boolean;
}
