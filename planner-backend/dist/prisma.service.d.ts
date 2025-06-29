import { OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "prisma/generated/prisma";
export declare class PrismaService extends PrismaClient implements OnModuleInit {
    onModuleInit(): Promise<void>;
}
