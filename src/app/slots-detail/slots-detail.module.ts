import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlotsDetailRoutingModule } from './slots-detail-routing.module';
import { SlotsDetailComponent } from './slots-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [SlotsDetailComponent],
  imports: [
    CommonModule,
    SlotsDetailRoutingModule,
    ReactiveFormsModule
  ]
})
export class SlotsDetailModule { }
