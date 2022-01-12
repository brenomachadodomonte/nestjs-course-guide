import { Module } from  '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppController } from './app.controller';

@Module({
    controllers: [AppController]
})
class AppModule {}

async function boostrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}

boostrap();