import { User } from 'src/user/user.entity';
export declare class Area {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    status: boolean;
    users?: User[];
    manager?: User;
}
