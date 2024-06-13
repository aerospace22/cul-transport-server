import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  healthcheckHandler() {
    return 'SYSTEM ONLINE';
  }
}
