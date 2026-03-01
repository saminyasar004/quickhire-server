import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { JobsModule } from './jobs/jobs.module';
import { ApplicationsModule } from './applications/applications.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Job } from './models/job.model';
import { Application } from './models/application.model';
import { User } from './models/user.model';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      uri: process.env.DATABASE_URL,
      models: [Job, Application, User],
      autoLoadModels: true,
      synchronize: true,
      sync: { alter: true },
    }),
    JobsModule,
    ApplicationsModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
