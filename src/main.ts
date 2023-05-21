import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'hbs';
import express from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    );

    app.useStaticAssets(join(__dirname, '..', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    hbs.registerPartials(join(__dirname, '..', 'views/partials'));
    hbs.registerPartials(join(__dirname, '..', 'views/layout'));
    app.setViewEngine('hbs');
    app.set('view engine', 'html');
    app.engine('html', require('hbs').__express);

  await app.listen(3000);

  
}
bootstrap();
