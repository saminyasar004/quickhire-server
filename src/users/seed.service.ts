import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../models/user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async onModuleInit() {
    await this.seedAdmin();
  }

  async seedAdmin() {
    const userCount = await this.userModel.count();
    if (userCount === 0) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      await this.userModel.create({
        name: 'Admin',
        email: 'admin@quickhire.com',
        password: hashedPassword,
        role: 'ADMIN',
      });
      console.log('Admin user seeded successfully');
    }
  }
}
