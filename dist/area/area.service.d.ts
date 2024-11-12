import { PrismaService } from '../prisma/prisma.service';
import { CreateAreaDto } from './dto/area-create.dto';
import { Area } from './area.entity';
import { UpdateAreaDto } from './dto/area-update.dto';
export declare class AreaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateAreaDto): Promise<Area>;
    findAll(): Promise<Area[]>;
    findOne(id: number): Promise<Area | null>;
    update(id: number, data: UpdateAreaDto): Promise<Area>;
    remove(id: number): Promise<Area>;
}
