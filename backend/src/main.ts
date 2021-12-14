import { NestFactory } from '@nestjs/core';
import express from 'express';
import path from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
  if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'/frontend/build')))
    //@ts-ignore
    app.get('*',(req,res)=> res.sendFile(path.resolve(__dirname,'frontend','build','index.html')))
  }
}
bootstrap();
