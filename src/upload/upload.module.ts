import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  controllers: [UploadController],
  providers: [UploadService],
  imports: [
    MulterModule.register({
      dest: './uploads', // specify the upload directory
    }),
  ],
})
export class UploadModule {}
