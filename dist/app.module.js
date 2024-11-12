"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./user/user.module");
const prisma_module_1 = require("./prisma/prisma.module");
const role_module_1 = require("./role/role.module");
const area_module_1 = require("./area/area.module");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const log_activity_middleware_1 = require("./middleware/log-activity.middleware");
const product_module_1 = require("./product/product.module");
const warehouse_module_1 = require("./warehouse/warehouse.module");
const notification_module_1 = require("./notification/notification.module");
const voucher_module_1 = require("./voucher/voucher.module");
const reportes_module_1 = require("./reportes/reportes.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(log_activity_middleware_1.LogActivityMiddleware)
            .exclude({ path: 'auth/login', method: common_1.RequestMethod.POST }, { path: 'auth/register', method: common_1.RequestMethod.POST }, { path: 'user', method: common_1.RequestMethod.POST }, { path: 'area', method: common_1.RequestMethod.POST }, { path: 'role', method: common_1.RequestMethod.POST })
            .forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            user_module_1.UserModule,
            prisma_module_1.PrismaModule,
            role_module_1.RoleModule,
            area_module_1.AreaModule,
            auth_module_1.AuthModule,
            jwt_1.JwtModule.register({
                global: true,
            }),
            product_module_1.ProductModule,
            warehouse_module_1.WarehouseModule,
            notification_module_1.NotificationModule,
            voucher_module_1.VoucherModule,
            reportes_module_1.ReportesModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map