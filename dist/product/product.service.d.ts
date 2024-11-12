import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateKardexDto } from './dto/create-kardex.dto';
import { Kardex } from './entities/kardex.entity';
import { Inventory } from './entities/inventory.entity';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { NotificationsGateway } from 'src/notification/notifications.gateway';
export declare class ProductService {
    private readonly prisma;
    private readonly notificationsGateway;
    constructor(prisma: PrismaService, notificationsGateway: NotificationsGateway);
    create(data: CreateProductDto): Promise<Product>;
    findAll(user: any): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    update(id: number, data: UpdateProductDto): Promise<Product>;
    remove(id: number): Promise<Product>;
    findAllKardex(): Promise<Kardex[]>;
    createKardex(data: CreateKardexDto): Promise<Kardex>;
    updateMinStock(id: number, data: UpdateInventoryDto): Promise<Inventory>;
    findKardexByProduct(id: number): Promise<Kardex[]>;
}
