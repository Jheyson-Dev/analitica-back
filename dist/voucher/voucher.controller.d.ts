import { VoucherService } from './voucher.service';
import { CreateVoucherDtoComplete } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';
import { Voucher } from './entity/voucher.entity';
export declare class VoucherController {
    private readonly voucherService;
    constructor(voucherService: VoucherService);
    create(createVoucherDto: CreateVoucherDtoComplete): Promise<Voucher>;
    findOne(id: number, req: Request): Promise<Voucher>;
    findAll(req: Request): Promise<Voucher[]>;
    update(id: number, updateVoucherDto: UpdateVoucherDto): Promise<Voucher>;
    remove(id: number): Promise<Voucher>;
}
