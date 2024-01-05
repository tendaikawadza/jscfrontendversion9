import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventorydashboardComponent } from './inventorydashboard/inventorydashboard.component';
import { ProvincialinventoryComponent } from './provincialinventory/provincialinventory.component';
import { CentralInventoryComponent } from './central-inventory/central-inventory.component';
import { CentralinventorystationerypensComponent } from './centralinventorystationerypens/centralinventorystationerypens.component';
import { CentralinventoryictComponent } from './centralinventoryict/centralinventoryict.component';
import { InventoryComponent } from './inventory.component';


const routes: Routes = [
  {path:'centralinventoryict',component:CentralinventoryictComponent},
  {path:'centralinventorycategory/centralinventoryict',component:CentralinventoryictComponent},
  { path:'centralinventorycategory/centralinventorystationerypens', component: CentralinventorystationerypensComponent },
  {path:'proviancialInventory', component:ProvincialinventoryComponent},
  {path:'centralinventorycategory', component:CentralInventoryComponent}, 
  {path:'centralInventory', component:CentralInventoryComponent},
    {path:'inventorydashboard', component:InventorydashboardComponent},
    {path:'', component:InventoryComponent},


    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
