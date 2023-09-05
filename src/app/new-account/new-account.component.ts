import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService], //ใช้บอก Angular ว่าสร้างยังไง Angular จะสร้าง instance ให้และส่งมาให้ใช้
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  // เป็นการบอก Angular ว่า ต้องการใช้ instance ของ LoggingService
  constructor(
    // private loggingService: LoggingService,
    private accountService: AccountService
  ) {
    // รับข้อมูลจาก event ที่เกิดขึ้น
    accountService.statusUpdate.subscribe((status: string) =>
      alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus,
    // });
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
