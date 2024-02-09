import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  create() {
    return this.jobsService.create();
  }

  @Get()
  findAll() {
    return this.jobsService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.jobsService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobsService.remove(+id);
  }

  @Get('latest')
  getLatest() {
    return this.jobsService.getLatest();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobsService.findOne(id);
  }
}
