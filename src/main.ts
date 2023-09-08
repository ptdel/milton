import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { WsAdapter } from '@nestjs/platform-ws';

async function bootstrap() {
  /* App */
  const app = await NestFactory.create(AppModule);

  /* Logging */
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  /* Validation */
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  /* Documentation */
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Milton, the Self-Service Catalog')
    .setDescription('The ratio of people to cake is too big.')
    .setVersion('1.0.0')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, swaggerDocument);

  /* Database */
  app.enableShutdownHooks();

  /* Queue */
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.REDIS,
    options: {
      host: 'localhost',
      port: 6379,
    },
  });

  /* WebSocket */
  app.useWebSocketAdapter(new WsAdapter(app));

  /* Host */
  const config = app.get<ConfigService>(ConfigService);
  app.startAllMicroservices();
  await app.listen(config.get<number>('app.port') ?? 8080);
}
bootstrap();
