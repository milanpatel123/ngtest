import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlotsRoutingModule } from './slots-routing.module';
import { SlotsComponent } from './slots.component';


@NgModule({
  declarations: [SlotsComponent],
  imports: [
    CommonModule,
    SlotsRoutingModule
  ]
})
export class SlotsModule { }
