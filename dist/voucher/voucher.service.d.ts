import { CreateVoucherDtoComplete } from './dto/create-voucher.dto';
import { Voucher } from './entity/voucher.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateVoucherDto } from './dto/update-voucher.dto';
import { NotificationsGateway } from 'src/notification/notifications.gateway';
export declare class VoucherService {
    private readonly prisma;
    private readonly notificationsGateway;
    constructor(prisma: PrismaService, notificationsGateway: NotificationsGateway);
    create(data: CreateVoucherDtoComplete): Promise<Voucher>;
    findOne(id: number, user: any): Promise<Voucher>;
    findAll(user: any): Promise<Voucher[]>;
    update(id: number, data: UpdateVoucherDto): Promise<Voucher>;
    remove(id: number): Promise<Voucher>;
}
