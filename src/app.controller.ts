import { Body, Controller, Get, Post, Render, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { caption: 'Add Investor Form' };
  }


  @Post('/add-entry')
  @UseInterceptors(FileInterceptor('file'))
  @Render('add-entry-confirmation')
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body: any) {
    const {firstName, lastName, dob, phoneNumber, street, state, zip, ssn } = body  
    this.appService.setCaheEntry({firstName, lastName, dob, phoneNumber, street, state, zip, ssn, file: file.filename } )
    return { message: 'File uploaded successfully', filename: file.filename };
  }

}
