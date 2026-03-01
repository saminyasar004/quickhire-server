import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Application } from '../models/application.model';
import { CreateApplicationDto } from '../dto';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectModel(Application)
    private applicationModel: typeof Application,
  ) {}

  async create(
    createApplicationDto: CreateApplicationDto,
  ): Promise<Application> {
    return this.applicationModel.create({ ...createApplicationDto });
  }

  async findAllByJob(jobId: string): Promise<Application[]> {
    return this.applicationModel.findAll({ where: { job_id: jobId } });
  }

  async findByEmail(email: string): Promise<Application[]> {
    return this.applicationModel.findAll({
      where: { email },
      include: ['job'],
    });
  }
}
