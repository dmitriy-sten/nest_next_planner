import { PrismaService } from 'src/prisma.service';
import { TaskDto } from './task.dto';
export declare class TaskService {
    private prisma;
    constructor(prisma: PrismaService);
    getById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        priority: import("prisma").$Enums.Priority | null;
        isCompleted: boolean;
        userId: string;
    } | null>;
    create(dto: TaskDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string | null;
        email: string;
        password: string;
        workInterval: number | null;
        breakInterval: number | null;
        intervalsCount: number | null;
    }>;
    update(id: string, dto: TaskDto): Promise<void>;
}
