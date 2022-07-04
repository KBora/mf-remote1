import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'kwoo-test-lib';

@Component({
  selector: 'app-account-master',
  templateUrl: './account-master.component.html',
  styleUrls: ['./account-master.component.scss']
})
export class AccountMasterComponent implements OnInit {

  counter$ = this.dataSharingService.counter$;

  constructor(private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
  }
  
  incrementCounter(): void {
    this.dataSharingService.incrementCounter();
  }
}
