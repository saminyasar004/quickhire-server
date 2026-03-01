import { Column, Model, Table, DataType, HasMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Application } from './application.model';

@Table({
  tableName: 'jobs',
  timestamps: true,
})
export class Job extends Model {
  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440000' })
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  declare id: string;

  @ApiProperty({ example: 'Senior Full Stack Developer' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare title: string;

  @ApiProperty({ example: 'QuickHire Inc.' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare company: string;

  @ApiProperty({ example: 'San Francisco, CA' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare location: string;

  @ApiProperty({ example: 'Technology' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare category: string;

  @ApiProperty({ example: 'Full Time' })
  @Column({
    defaultValue: 'Full Time',
  })
  declare type: string;

  @ApiProperty({ example: 'We are looking for an experienced developer...' })
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  declare description: string;

  @ApiProperty({ example: 'logo-1740880000.png', required: false })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare logo: string;

  @ApiProperty({ type: () => [Application], required: false })
  @HasMany(() => Application)
  applications: Application[];
}
