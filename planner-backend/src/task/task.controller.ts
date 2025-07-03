import { Body, Controller, HttpCode, Put, Get, UsePipes, ValidationPipe, Post, Param, Delete } from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { TaskService } from './task.service';
import { TaskDto } from './task.dto';

@Controller('user/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }


  @Get()
  @Auth()
  async getAll(@CurrentUser('id') userId: string) {
    return this.taskService.getAll(userId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async create(@Body() dto: TaskDto, @CurrentUser('id') userId: string) {
    return this.taskService.create(dto, userId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async update(
    @Body() dto: TaskDto,
    @CurrentUser('id') userId: string,
    @Param('id') id: string) {
    return this.taskService.update(dto, id, userId)
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(
    @CurrentUser('id') userId: string,
    @Param('id') id: string
  ) {
    return this.taskService.delete(id, userId)
  }

}
