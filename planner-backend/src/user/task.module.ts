import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TaskService } from './task.service';

@Module({
  controllers: [],
  providers: [TaskService, PrismaService],
  exports: [TaskService]
})
export class TaskModule {}
