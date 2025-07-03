import { IsEmail, IsNumber, IsOptional, IsString, Min, MinLength } from "class-validator";

export class PomodoroSettingsDto {

    @IsOptional()
    @IsNumber()
    @Min(1)
    workInterval?: number


    @IsOptional()
    @IsNumber()
    @Min(1)
    breakInterval?: number

    @IsOptional()
    @IsNumber()
    @Min(10)
    intervalCount?: number
}



export class UserDto extends PomodoroSettingsDto {


    @IsEmail()
    @IsOptional()
    email?: string

    @IsString()
    @IsOptional()
    name?: string

    @IsOptional()
    @MinLength(6, {
        message: 'Password must be at least 6 characters long'
    })
    @IsString()
    password?: string

    
}