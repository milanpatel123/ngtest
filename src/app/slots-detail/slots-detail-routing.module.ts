import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlotsDetailComponent } from './slots-detail.component';

const routes: Routes = [{ path: '', component: SlotsDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlotsDetailRoutingModule { }
