
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';


@Schema(
    { timestamps: true }
)

export class Note {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  dateTime: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
