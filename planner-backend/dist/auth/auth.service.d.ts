import { UserService } from 'src/user/user.service';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
export declare class AuthService {
    private jwt;
    private userService;
    constructor(jwt: JwtService, userService: UserService);
    EXPIRE_DAY_REFRESH_TOKEN: number;
    REFRESH_TOKEN_NAME: string;
    login(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            email: string;
            workInterval: number | null;
            breakInterval: number | null;
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            intervalsCount: number | null;
        };
    }>;
    register(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            email: string;
            workInterval: number | null;
            breakInterval: number | null;
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            intervalsCount: number | null;
        };
    }>;
    getNewTokens(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            tasks: {
                name: string;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                priority: import("prisma").$Enums.Priority | null;
                isCompleted: boolean;
                userId: string;
            }[];
        } & {
            email: string;
            password: string;
            workInterval: number | null;
            breakInterval: number | null;
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            intervalsCount: number | null;
        };
    }>;
    private issueTokens;
    private validateUser;
    addRefreshTokenToResponse(res: Response, refreshToken: string): void;
    removeRefreshTokenToResponse(res: Response): void;
}
