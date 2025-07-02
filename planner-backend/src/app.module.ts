import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TaskModule } from './user/task.module';
import { UserModule } from './task/user.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule, TaskModule],

})
export class AppModule { }
