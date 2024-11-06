import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Sistema Kardex y Gestión de Documentos')
    .setDescription(
      'API para la gestión de Kardex y documentos de la Municipalidad de Cabanillas',
    )
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory, {
    jsonDocumentUrl: 'api/json',
  });

  // await app.listen(3000, '192.168.18.22');
  await app.listen(3000);
}
bootstrap();
