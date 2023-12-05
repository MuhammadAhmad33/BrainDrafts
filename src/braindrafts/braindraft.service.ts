
import { Injectable, NotFoundException } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateNoteDto } from '../dtos/notes.dto';
import { Note} from '../schemas/notes.schema';
import { UserService } from './users.service';
import { User } from 'src/schemas/users.schema';

@Injectable()
export class BraindraftService {
  constructor(
    @InjectModel('Note') private  noteModel: Model<Note>,
    @InjectModel('User') private  userModel: Model<User>,
  private readonly userService :UserService
  ) {}


//   async createNote(userId: string, createNoteDto: CreateNoteDto): Promise<Note> {
//     const createdNote = new this.noteModel({ ...createNoteDto, userId });
//     return createdNote.save();
//   }

// Inside BraindraftService
async createNote(userId: string, createNoteDto: CreateNoteDto): Promise<Note> {
    const user = await this.userModel.findById(new Types.ObjectId(userId)).exec();
    
    if (!user) {
        // Handle the case where the user is not found
        throw new Error('User not found');
      }
      const createdNote = new this.noteModel({ ...createNoteDto, userId });

      // Push the new note into the user's notes array
      user.notes.push(createdNote);
    
      // Save the updated user
      await user.save();
    
      // Save the created note separately to get its _id and timestamps
      const savedNote = await createdNote.save();
    
      // Return the created note (with _id and timestamps)
      return savedNote;
    }
  
  
  
///usernotes
async getAllNotesByUser(userId: string): Promise<CreateNoteDto[]> {
    console.log(userId)
    const user = await this.userModel.findById(new Types.ObjectId(userId)).exec();
    console.log(user);
    if (!user) {
      throw new NotFoundException('User not found');
    }
  
    // Return the notes array of the found user
    return user.notes;
  }
  
///

  async getNoteById(noteId: string, userId: string): Promise<Note> {
    const note = await this.noteModel.findOne({ _id: noteId}).exec();
    if (!note) {
      throw new NotFoundException(`Note with id ${noteId} not found for user ${userId}`);
    }
    return note;
  }

  async updateNote(noteId: string, userId: string, updateNoteDto: CreateNoteDto): Promise<Note> {
    const updatedNote = await this.noteModel.findOneAndUpdate({ _id: noteId, userId }, updateNoteDto, { new: true }).exec();
    if (!updatedNote) {
      throw new NotFoundException(`Note with id ${noteId} not found for user ${userId}`);
    }
    return updatedNote;
  }
  

  async deleteNoteFromUser(noteId: string, userId: string): Promise<any> {
    try {
      // Find the user by userId
      const user = await this.userModel.findById(new Types.ObjectId(userId)).exec();

      if (!user) {
        throw new NotFoundException(`User with id ${userId} not found`);
      }
      const deletedNote = await this.noteModel.findOne({ _id: noteId }).exec();
      // Check if the noteId is present in the user's notes array
      const noteIndex = user.notes.findIndex((note) =>  note.title === deletedNote.title);
      console.log(noteIndex)

      if (noteIndex === -1) {
        throw new NotFoundException(`Note with id ${noteId} not found in user's notes`);
      }

      // Remove the note from the user's notes array
      user.notes.splice(noteIndex, 1);

      // Save the updated user
      const updatedUser = await user.save();

      return {deletedNote, updatedUser};
    } catch (error) {
      // Handle errors (log, rethrow, or return a specific response)
      console.error('Error deleting note from user:', error);
      throw error;
    }
  }
}
