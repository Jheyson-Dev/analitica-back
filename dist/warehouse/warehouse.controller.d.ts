import { WarehouseService } from './warehouse.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { Warehouse } from './warehouse.entity';
export declare class WarehouseController {
    private readonly warehouseService;
    constructor(warehouseService: WarehouseService);
    create(createWarehouseDto: CreateWarehouseDto): Promise<Warehouse>;
    findAll(): Promise<Warehouse[]>;
    findOne(id: number): Promise<Warehouse>;
    update(id: number, updateWarehouseDto: UpdateWarehouseDto): Promise<Warehouse>;
    remove(id: number): Promise<Warehouse>;
}
