import { Priority } from "@prisma/client";
import { Transform } from "class-transformer";
import { IsBoolean, IsEmail, IsEnum, IsNumber, IsOptional, IsString, Min, MinLength } from "class-validator";

export class TaskDto {

    @IsString()
    @IsOptional()
    name: string


    @IsBoolean()
    @IsOptional()
    isCompleted?: boolean

    @IsString()
    @IsOptional()
    createdAt?: string



    @IsEnum(Priority)
    @IsOptional()
    @Transform(({ value }) => ('' + value).toLowerCase())
    priority?: Priority
}



