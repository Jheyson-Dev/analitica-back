"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Sistema Kardex y Gestión de Documentos')
        .setDescription('API para la gestión de Kardex y documentos de la Municipalidad de Cabanillas')
        .setVersion('1.0')
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, documentFactory, {
        jsonDocumentUrl: 'api/json',
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map