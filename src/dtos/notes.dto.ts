// src/braindrafts/dto/note.dto.ts

import { IsNotEmpty, IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateNoteDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsDateString()
  dateTime: string;
}
