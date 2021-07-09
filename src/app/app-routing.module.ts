import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcuComponent } from './calcu/calcu.component';

const routes: Routes = [
  {
    path:"",
    component:CalcuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
