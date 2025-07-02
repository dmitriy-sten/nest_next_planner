import { UserService } from './user.service';
import { UserDto } from './user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    profile(id: string): Promise<{
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
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            name: string | null;
            workInterval: number | null;
            breakInterval: number | null;
            intervalsCount: number | null;
        };
        statistics: {
            label: string;
            value: number | undefined;
        }[];
    }>;
    updateProfile(id: string, dto: UserDto): Promise<{
        email: string;
        name: string | null;
    }>;
}
