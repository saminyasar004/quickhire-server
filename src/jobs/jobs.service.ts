import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Job } from '../models/job.model';
import { CreateJobDto } from '../dto';

@Injectable()
export class JobsService {
  constructor(
    @InjectModel(Job)
    private jobModel: typeof Job,
  ) {}

  async findAll(): Promise<Job[]> {
    return this.jobModel.findAll();
  }

  async findOne(id: string): Promise<Job> {
    const job = await this.jobModel.findByPk(id);
    if (!job) {
      throw new NotFoundException(`Job with ID ${id} not found`);
    }
    return job;
  }

  async create(createJobDto: CreateJobDto): Promise<Job> {
    return this.jobModel.create({ ...createJobDto });
  }

  async remove(id: string): Promise<void> {
    const job = await this.findOne(id);
    await job.destroy();
  }
}
