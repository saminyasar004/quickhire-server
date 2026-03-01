import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseUUIDPipe,
  UseGuards,
  Request,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from '../dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard, Roles } from '../auth/roles.guard';

@ApiTags('applications')
@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post()
  @ApiOperation({ summary: 'Submit a new job application' })
  @ApiResponse({
    status: 201,
    description: 'The application has been successfully submitted.',
  })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  create(@Body() createApplicationDto: CreateApplicationDto) {
    return this.applicationsService.create(createApplicationDto);
  }

  @Get('my-applications')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get applications for the logged-in user' })
  @ApiResponse({
    status: 200,
    description: 'Return applications for the current user.',
  })
  findMyApplications(@Request() req: any) {
    return this.applicationsService.findByEmail(req.user.email);
  }

  @Get('job/:jobId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all applications for a specific job (Admin)' })
  @ApiParam({ name: 'jobId', description: 'The UUID of the job' })
  @ApiResponse({
    status: 200,
    description: 'Return all applications for the job.',
  })
  @ApiResponse({ status: 404, description: 'Job not found.' })
  findAllByJob(@Param('jobId', new ParseUUIDPipe()) jobId: string) {
    return this.applicationsService.findAllByJob(jobId);
  }
}
