import { Area } from 'src/area/area.entity';
import { Log } from 'src/auth/log.entity';
import { Role } from 'src/role/role.entity';
export declare class User {
    id: number;
    username: string;
    password: string;
    name: string;
    lastname: string;
    email: string;
    phone?: string;
    dni: string;
    roleId?: number;
    areaId?: number;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
    role?: Role;
    area?: Area;
    logs?: Log[];
}
