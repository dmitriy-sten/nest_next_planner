import { AuthDto } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './task.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getById(id: string): Promise<({
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
    }) | null>;
    getByEmail(email: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        name: string | null;
        password: string;
        workInterval: number | null;
        breakInterval: number | null;
        intervalsCount: number | null;
    } | null>;
    getProfile(id: string): Promise<{
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
    create(dto: AuthDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        name: string | null;
        password: string;
        workInterval: number | null;
        breakInterval: number | null;
        intervalsCount: number | null;
    }>;
    update(id: string, dto: UserDto): Promise<{
        email: string;
        name: string | null;
    }>;
}
