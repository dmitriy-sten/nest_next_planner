import { TaskService } from './task.service';
import { TaskDto } from './task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    profile(id: string): Promise<void>;
    updateProfile(id: string, dto: TaskDto): Promise<void>;
}
