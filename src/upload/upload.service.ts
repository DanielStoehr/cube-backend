import { Injectable } from '@nestjs/common';
import * as fs from 'fs-extra';
import * as path from 'path';

@Injectable()
export class UploadService {
  url = '';

  getUrl() {
    return { url: this.url };
  }

  async uploadFileFromPath(filePath: string) {
    try {
      const fileName = path.basename(filePath);
      const fileDest = `./uploads/${fileName}`; // Destination path where file will be uploaded
      await fs.copyFile(filePath, fileDest);
      const extFileName = `http://localhost:3000/${fileName}`;
      this.url = extFileName;
      return {
        fileUrl: extFileName,
      };
    } catch (error) {
      throw new Error(`Failed to upload file: ${error.message}`);
    }
  }
}
