import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateKardexDto } from './dto/create-kardex.dto';
import { Kardex } from './entities/kardex.entity';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { Inventory } from './entities/inventory.entity';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(req: Request): Promise<Product[]>;
    findAllKardexs(): Promise<Kardex[]>;
    updateMinStock(id: number, updateInventory: UpdateInventoryDto): Promise<Inventory>;
    findOne(id: number): Promise<Product>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<Product>;
    remove(id: number): Promise<Product>;
    createKardex(createKardexDto: CreateKardexDto): Promise<Kardex>;
    findKardexByProduct(id: number): Promise<Kardex[]>;
}
