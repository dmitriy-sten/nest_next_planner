import { ConfigService } from "@nestjs/config";
import { Strategy } from 'passport-jwt';
import { UserService } from "src/user/user.service";
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private userService;
    constructor(configService: ConfigService, userService: UserService);
    validate({ id }: {
        id: any;
    }): Promise<({
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
    }) | null>;
}
export {};
