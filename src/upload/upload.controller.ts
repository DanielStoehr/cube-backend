import { Body, Controller, Get, Post } from '@nestjs/common';
import { UploadService } from './upload.service';
import { ApiProperty } from '@nestjs/swagger';

class UploadFileDto {
  @ApiProperty({ example: '/home/zbook/dev/hackaton/backend/source/1.jpeg' })
  filePath: string;
}

@Controller('upload')
export class UploadController {
  constructor(private uploadService: UploadService) {}

  @Get()
  getFileUrl() {
    return this.uploadService.getUrl();
  }

  @Post()
  async uploadFile(@Body() body: UploadFileDto) {
    return await this.uploadService.uploadFileFromPath(body.filePath);
  }
}
