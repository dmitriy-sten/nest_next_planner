import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Request, Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: AuthDto, response: Response): Promise<{
        accessToken: string;
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
    register(dto: AuthDto, response: Response): Promise<{
        accessToken: string;
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
    getNewToken(req: Request, res: Response): Promise<{
        accessToken: string;
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
    logout(res: Response): Promise<boolean>;
}
