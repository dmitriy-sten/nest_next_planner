import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Request, Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: AuthDto, response: Response): Promise<{
        accessToken: string;
        user: any;
    }>;
    register(dto: AuthDto, response: Response): Promise<{
        accessToken: string;
        user: any;
    }>;
    getNewToken(req: Request, res: Response): Promise<{
        accessToken: string;
        user: any;
    }>;
    logout(res: Response): Promise<boolean>;
}
