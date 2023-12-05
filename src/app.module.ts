import { Module } from '@nestjs/common';
import { BraindraftModule } from './braindrafts/braindraft.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [BraindraftModule,AuthModule,MongooseModule.forRoot('mongodb+srv://ahmaadd7:ahmadahmad@cluster0.bzvgqet.mongodb.net/')]})
export class AppModule {}
