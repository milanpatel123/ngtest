import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'slots',
    loadChildren: () => import('./slots/slots.module').then(m => m.SlotsModule)
  },
  { 
    path: 'slots-detail/:id', 
    loadChildren: () => import('./slots-detail/slots-detail.module').then(m => m.SlotsDetailModule) },
  {
    path: '',
    redirectTo: 'slots',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
