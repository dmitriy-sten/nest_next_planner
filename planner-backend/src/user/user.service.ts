import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { AuthDto } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './user.dto';

import { startOfDay, subDays } from 'date-fns'


@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) { }

    async getById(id: string) {
        return this.prisma.user.findUnique({
            where: {
                id
            },
            include: {
                tasks: true
            }
        })
    }


    async getByEmail(email: string) {
        return this.prisma.user.findUnique({
            where: {
                email
            },
        })
    }


    async getProfile(id: string) {
        const profile = await this.getById(id)

        const totalTasks = profile?.tasks.length
        const completedTasks = await this.prisma.task.count({
            where: {
                userId: id,
                isCompleted: true
            }
        })


        const todayStart = startOfDay(new Date())
        const weekStart = startOfDay(subDays(new Date(), 7))

        const todayTasks = await this.prisma.task.count({
            where: {
                userId: id,
                createdAt: {
                    gte: todayStart.toISOString()
                }
            }
        })

        const weekTasks = await this.prisma.task.count({
            where: {
                userId: id,
                createdAt: {
                    gte: weekStart.toISOString()
                }
            }
        })


        //@ts-ignore
        const { password, ...rest } = profile

        return {
            user: rest,
            statistics: [{
                label: "Total", value: totalTasks
            }, {
                label: "Completed tasks", value: completedTasks
            }, {
                label: "Today tasks", value: todayTasks
            }, {
                label: "Week tasks", value: weekTasks
            }]
        }

    }



    async create(dto: AuthDto) {
        return this.prisma.user.create({
            data: {
                email: dto.email,
                name: "",
                password: await hash(dto.password)
            }
        })
    }

    async update(id: string, dto: UserDto) {

        let data = dto

        if (data?.password) {
            data = { ...dto, password: await hash(dto.password || '') }
        }

        return this.prisma.user.update({
            where: {
                id
            },
            data,
            select: {
                email: true,
                name: true
            }
        })

    }
}
