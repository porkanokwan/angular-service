import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{
  //   id: number;
  //   newStatus: string;
  // }>();

  constructor(
    // private loggingService: LoggingService,
    private accountService: AccountService
  ) {}

  onSetTo(status: string) {
    // this.statusChanged.emit({ id: this.id, newStatus: status });
    this.accountService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);

    // คอยดัก event นี้ว่าเกิดขึ้นยัง
    this.accountService.statusUpdate.emit(status);
  }
}
