import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { UsersService } from './src/users/users.service';

async function seed() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const usersService = app.get(UsersService);

  console.log('Seeding initial users...');

  // Create Admin
  const adminExists = await usersService.findOne('admin@quickhire.com');
  if (!adminExists) {
    await usersService.create({
      name: 'Admin QuickHire',
      email: 'admin@quickhire.com',
      password: 'admin123',
      role: 'ADMIN',
    });
    console.log('Admin created: admin@quickhire.com / admin123');
  } else {
    console.log('Admin already exists.');
  }

  // Create Normal User
  const userExists = await usersService.findOne('user@example.com');
  if (!userExists) {
    await usersService.create({
      name: 'John Candidate',
      email: 'user@example.com',
      password: 'user123',
      role: 'USER',
    });
    console.log('User created: user@example.com / user123');
  } else {
    console.log('User already exists.');
  }

  await app.close();
  console.log('Seeding complete.');
}

seed();
