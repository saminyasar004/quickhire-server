import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
  MinLength,
} from 'class-validator';

export class CreateJobDto {
  @ApiProperty({
    description: 'The title of the job listing',
    example: 'Senior Full Stack Developer',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'The name of the company hiring',
    example: 'QuickHire Inc.',
  })
  @IsNotEmpty()
  @IsString()
  company: string;

  @ApiProperty({
    description: 'The location of the job',
    example: 'San Francisco, CA',
  })
  @IsNotEmpty()
  @IsString()
  location: string;

  @ApiProperty({
    description: 'Job category (e.g., Design, Technology, Marketing)',
    example: 'Technology',
  })
  @IsNotEmpty()
  @IsString()
  category: string;

  @ApiProperty({
    description: 'Full description of the job',
    example:
      'We are looking for an experienced developer with expertise in React and Node.js...',
    minLength: 10,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  description: string;

  @ApiProperty({
    description: 'The filename of the company logo',
    example: 'logo.png',
    required: false,
  })
  @IsOptional()
  logo?: string;
}

export class CreateApplicationDto {
  @ApiProperty({
    description: 'The ID of the job being applied for',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsNotEmpty()
  @IsUUID()
  job_id: string;

  @ApiProperty({
    description: 'The full name of the applicant',
    example: 'John Doe',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The email address of the applicant',
    example: 'john.doe@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "The URL to the applicant's resume",
    example: 'https://docs.google.com/document/d/your-resume-id/edit',
  })
  @IsNotEmpty()
  @IsUrl()
  resume_link: string;

  @ApiProperty({
    description: 'A cover note provided by the applicant',
    example:
      'I am excited to apply for this position and think my skills are a great fit...',
    minLength: 10,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  cover_note: string;
}

export class LoginDto {
  @ApiProperty({ example: 'admin@quickhire.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'admin123' })
  @IsString()
  @IsNotEmpty()
  password: string;
}

export class RegisterDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'USER', enum: ['USER', 'ADMIN'], required: false })
  @IsString()
  role?: string;
}

export class RefreshTokenDto {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  @IsString()
  @IsNotEmpty()
  refresh_token: string;
}
