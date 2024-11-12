import { RoleService } from './role.service';
import { Role } from './role.entity';
import { CreateRoleDto } from './dto/role-create.dto';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    findAll(): Promise<Role[]>;
    findOne(id: number): Promise<Role>;
    create(data: CreateRoleDto): Promise<Role>;
    update(id: number): Promise<string>;
    remove(id: number): Promise<string>;
}
