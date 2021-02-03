import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlotsComponent } from './slots.component';

const routes: Routes = [{ path: '', component: SlotsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlotsRoutingModule { }
