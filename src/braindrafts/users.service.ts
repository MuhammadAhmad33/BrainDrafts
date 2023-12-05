// src/users/user.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from '../dtos/users.dto';
import { User } from '../schemas/users.schema';
import { Note } from 'src/schemas/notes.schema';
import { CreateNoteDto } from 'src/dtos/notes.dto';

@Injectable()
export class UserService {
  constructor( @InjectModel('User') private userModel: Model<User>,) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findById(id: string): Promise<User> {
    return this.userModel.findOne({ _id: id}).exec();
  }
  
 //finduser
 async find(username: string): Promise<User> {
    console.log(username)
    const user = await this.userModel.findOne({username}).exec();
    console.log(user, 'service');
    if (!user) {
        throw new NotFoundException('User not found');
    }
    console.log('logged in')
    return user;
}
///usernotes
async getAllNotesByUser(userId: string): Promise<CreateNoteDto[]> {
    // Find the user by ID
    const user = await this.userModel.findById(userId).exec();
    console.log(user);
    if (!user) {
      throw new NotFoundException('User not found');
    }
  
    // Return the notes array of the found user
    return user.notes;
  }
  
///
  ///
//   async getUserById(userId: string): Promise<User> {
//     const user = await this.userModel.findById(userId).exec();
//     if (!user) {
//       throw new NotFoundException(`User with id ${userId} not found`);
//     }
//     return user;
//   }

  async updateUser(userId: string, updateUserDto: CreateUserDto): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(userId, updateUserDto, { new: true }).exec();
    if (!updatedUser) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }
    return updatedUser;
  }

//   async deleteUser(userId: string): Promise<User> {
//     const deletedUser = await this.userModel.findByIdAndDelete(userId).exec();
  
//     if (!deletedUser) {
//       throw new NotFoundException(`User with id ${userId} not found`);
//     }
  
//     // Cast the result to the User type
//     return deletedUser as User;
//   }
  
}
