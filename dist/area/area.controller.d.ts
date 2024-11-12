import { AreaService } from './area.service';
import { CreateAreaDto } from './dto/area-create.dto';
import { UpdateAreaDto } from './dto/area-update.dto';
import { Area } from './area.entity';
export declare class AreaController {
    private readonly areaService;
    constructor(areaService: AreaService);
    findAll(): Promise<Area[]>;
    findOne(id: number): Promise<Area>;
    create(data: CreateAreaDto): Promise<Area>;
    update(id: number, data: UpdateAreaDto): Promise<Area>;
    remove(id: number): Promise<Area>;
}
