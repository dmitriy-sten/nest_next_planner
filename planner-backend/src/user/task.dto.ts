import { IsBoolean, IsEmail, IsNumber, IsOptional, IsString, Min, MinLength } from "class-validator";

export class TaskDto {

    @IsString()
    @IsOptional()
    name:string


    @IsBoolean()
    @IsOptional()
    isCompleted:string

    @IsString()
    @IsOptional()
    createdAt:string
}



