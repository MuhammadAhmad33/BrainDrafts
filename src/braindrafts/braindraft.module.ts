import { Module } from '@nestjs/common';
import { BraindraftController } from './braindraft.controllter';
import { BraindraftService } from './braindraft.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/users.schema';
import { UserService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { Note,NoteSchema } from 'src/schemas/notes.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
              MongooseModule.forFeature([{ name: 'Note', schema: NoteSchema }])],
  controllers: [BraindraftController],
  providers: [BraindraftService,UserService,AuthService,JwtService],
})
export class BraindraftModule {}
