import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountMasterRoutingModule } from './account-master-routing.module';
import { AccountMasterComponent } from './account-master.component';


@NgModule({
  declarations: [
    AccountMasterComponent
  ],
  imports: [
    CommonModule,
    AccountMasterRoutingModule
  ]
})
export class AccountMasterModule { }
