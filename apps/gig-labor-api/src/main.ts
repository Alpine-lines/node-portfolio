import { NestFactory } from '@nestjs/core';
import { SwaggerModule, SwaggerDocumentOptions, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'verbose'],
  });

  // const options: SwaggerDocumentOptions =  {
  //   operationIdFactory: (
  //     controllerKey: string,
  //     methodKey: string
  //   ) => methodKey
  // };

  // const document = SwaggerModule.createDocument(app, config, options);
  // SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
