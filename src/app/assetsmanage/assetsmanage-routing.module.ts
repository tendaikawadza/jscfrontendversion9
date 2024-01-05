import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsmanageComponent } from './assetsmanage.component';

const routes: Routes = [{path:'', component:AssetsmanageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsmanageRoutingModule { }
