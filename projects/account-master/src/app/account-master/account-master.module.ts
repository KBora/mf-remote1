import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountMasterRoutingModule } from './account-master-routing.module';
import { AccountMasterComponent } from './account-master.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AccountMasterComponent
  ],
  imports: [
    CommonModule,
    AccountMasterRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class AccountMasterModule { }
