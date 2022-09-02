import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'mails' })
export class Mail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'destination_address' })
  destinationAddress: string;

  @Column({ name: 'due_date', type: 'timestamp', nullable: false })
  dueDate: string;

  @Column()
  status: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;

  @Column({ name: 'deleted_at' })
  deletedAt: string;
}
