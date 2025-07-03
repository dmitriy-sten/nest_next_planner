import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Request, Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: AuthDto, response: Response): Promise<{
        accessToken: string;
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            name: string | null;
            workInterval: number | null;
            breakInterval: number | null;
            intervalsCount: number | null;
        };
    }>;
    register(dto: AuthDto, response: Response): Promise<{
        accessToken: string;
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            name: string | null;
            workInterval: number | null;
            breakInterval: number | null;
            intervalsCount: number | null;
        };
    }>;
    getNewToken(req: Request, res: Response): Promise<{
        accessToken: string;
        user: {
            tasks: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                priority: import("prisma").$Enums.Priority | null;
                isCompleted: boolean;
                userId: string;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            name: string | null;
            password: string;
            workInterval: number | null;
            breakInterval: number | null;
            intervalsCount: number | null;
        };
    }>;
    logout(res: Response): Promise<boolean>;
}
