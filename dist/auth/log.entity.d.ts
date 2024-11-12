import { User } from 'src/user/user.entity';
export declare class Log {
    id: number;
    userId: number;
    action: number;
    description: number;
    createdAt: Date;
    users?: User;
}
