import { AuthDto } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getById(id: string): Promise<({
        tasks: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            priority: import("prisma/generated/prisma").$Enums.Priority | null;
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
}
