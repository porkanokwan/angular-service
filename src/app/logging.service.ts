import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  // ใช้เมื่อต้องใช้การ log เหมือนกันในหลายๆ ที่
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
