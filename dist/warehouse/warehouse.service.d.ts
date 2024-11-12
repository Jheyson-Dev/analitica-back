import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { Warehouse } from './warehouse.entity';
export declare class WarehouseService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateWarehouseDto): Promise<Warehouse>;
    findAll(): Promise<Warehouse[]>;
    findOne(id: number): Promise<Warehouse>;
    update(id: number, data: UpdateWarehouseDto): Promise<Warehouse>;
    remove(id: number): Promise<Warehouse>;
}
