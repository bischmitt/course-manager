import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Erro404Component } from './404/erro404.component';

const routes: Routes = [
  {path:'', redirectTo: 'courses', pathMatch: 'full'},

  //{path:'**', component: Erro404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
