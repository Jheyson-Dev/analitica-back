import { User } from '../user/user.entity';
export declare class Role {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    users?: User[];
}
