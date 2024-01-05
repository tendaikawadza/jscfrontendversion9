import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockitemrequestComponent } from './stockitemrequest.component';
const routes: Routes = [{path:'', component:StockitemrequestComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockitemrequestRoutingModule { }
