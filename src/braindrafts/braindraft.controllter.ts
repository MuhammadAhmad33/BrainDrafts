import { Controller, Get, Post, Body, Param, NotFoundException, Put, UseGuards, Req, Res, NotAcceptableException, Delete } from '@nestjs/common';
import { BraindraftService } from './braindraft.service';
import { UserService } from './users.service';
import { CreateUserDto } from 'src/dtos/users.dto';
import { User } from 'src/schemas/users.schema';
import { Note } from '../schemas/notes.schema'
import { AuthGuard } from 'src/auth/loacl-auth.guard';
import { CreateNoteDto } from 'src/dtos/notes.dto';
import { LoginDto } from 'src/dtos/login.dto';
import { AuthService } from 'src/auth/auth.service';

@Controller('notes')
export class BraindraftController {
    constructor(private readonly userService: UserService,
        private readonly braindraftService: BraindraftService,
        private readonly authService: AuthService
    ) { }

   

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.userService.getAllUsers();
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    async deleteNote(@Param('id') noteId: string,@Req() request: Request): Promise<any> {
      try {
        console.log('in')
        const user = request['user'] as any
        console.log(user, 'user')
        const id = user.id
        console.log(id)
        const deletedNote = await this.braindraftService.deleteNoteFromUser(noteId,id);
        return { success: true, deletedNote };
      } catch (error) {
        // Handle the error appropriately (e.g., return a specific error response)
        return { success: false, error: error.message };
      }
    }
  


    @Put(':id')
    async updateUser(@Param('id') userId: string, @Body() updateUserDto: CreateUserDto): Promise<User> {
        return this.userService.updateUser(userId, updateUserDto);
    }
    //getusernotes
    @Get('/userNotes')
    @UseGuards(AuthGuard)
    async usertodos(@Req() request: Request): Promise<CreateNoteDto[]> {
        console.log('in')
        const user = request['user'] as any
        console.log(user, 'user')
        const id = user.id
        console.log(id)
        try {
            const data = await this.braindraftService.getAllNotesByUser(id);
            return data;
        } catch (error) {
            throw new NotAcceptableException('Not found', 'cont');
        }
    }
    ///
    @Get('/archieve/:id')
    @UseGuards(AuthGuard)
    async getNoteById(@Param('id') noteId:string,@Req() request: Request):Promise<Note>{
        const user = request['user'] as any
        console.log(user, 'user')
        const id = user.id
        console.log(id)
        const note= await this.braindraftService.getNoteById(noteId,id)
        return note;
    }   
    ///

    @Post('/createnote')
    @UseGuards(AuthGuard)
    async createTodo(@Req() request: Request, @Body() usernote: CreateNoteDto): Promise<Note> {
        const user = request['user'] as any
        console.log(user, 'user')
        const id = user.id
        console.log(id)

        const createdNote = await this.braindraftService.createNote(id, usernote);
        return createdNote;
    }

    //fixed both issues
    //login
    @Post('login')
    findone(@Body() req: LoginDto): any {
        console.log('req', req)
        return this.authService.validateuser(req.username, req.password);
    }
    ///signup
    @Post('createUser')
    createUser(@Body() data: CreateUserDto): Promise<User> {
        return this.authService.newuser(data);
    }

}
