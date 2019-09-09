import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reserve{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'timestamp'})
  startDate: Date;

  @Column('int')
  totalDays: number;

  @Column('int')
  totalPerson: number;

  @Column('int')
  dptoId: number;

  @Column('int')
  reservationMethod: number;

  @Column('int')
  paymentMethod: number;

  @Column({ length: 100 })
  firstName: string;

  @Column({ length: 100 })
  lastName: string;

  @Column({ length: 150 })
  email: string;

  @Column({ length: 50 })
  phone: string;

  @Column('int')
  pricePerDay: number;

  @Column('text')
  observations: string;

  @Column('int')
  status: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  created_time: Date;

  @Column({ type: "timestamp"})
  updated_time: Date;
}
