import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DateTime } from 'luxon';
import { DateTimeTransformer } from '@util/transformers';
import { AdminLogType } from './enums';

@Entity('admin_log')
export class AdminLog {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  type: AdminLogType;

  @Column()
  statusCode: number;

  @Column()
  method: string;

  @Column()
  path: string;

  @Column()
  ip: string;

  @Column()
  className: string;

  @Column({ type: 'json' })
  data: any;

  @Column({ type: 'text' })
  stack: string;

  @CreateDateColumn({
    type: 'datetime',
    update: false,
    transformer: new DateTimeTransformer(),
  })
  createdAt: DateTime;

  @BeforeInsert()
  protected beforeInsert() {
    this.createdAt = DateTime.local();
  }
}
