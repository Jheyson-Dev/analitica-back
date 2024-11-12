import { PrismaService } from '../prisma/prisma.service';
import { Role } from './role.entity';
import { CreateRoleDto } from './dto/role-create.dto';
export declare class RoleService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createRole(data: CreateRoleDto): Promise<Role>;
    findAll(): Promise<Role[]>;
    findOne(id: number): Promise<Role>;
    update(id: number): Promise<string>;
    remove(id: number): Promise<string>;
}
