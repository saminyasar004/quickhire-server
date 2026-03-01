import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Job } from './job.model';

@Table({
  tableName: 'applications',
  timestamps: true,
})
export class Application extends Model {
  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440000' })
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  declare id: string;

  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'ID of the job',
  })
  @ForeignKey(() => Job)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare job_id: string;

  @ApiProperty({ type: () => Job, required: false })
  @BelongsTo(() => Job)
  declare job: Job;

  @ApiProperty({ example: 'John Doe' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @ApiProperty({ example: 'john.doe@example.com' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare email: string;

  @ApiProperty({
    example: 'https://docs.google.com/document/d/your-resume-id/edit',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare resume_link: string;

  @ApiProperty({ example: 'I am excited to apply for this position...' })
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  declare cover_note: string;
}
