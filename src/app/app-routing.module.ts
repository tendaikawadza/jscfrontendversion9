import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from './guard/authentication.guard';



import { AuditComponent } from './audit/audit/audit.component';
import { HeadProcurementAuthorisationComponent } from './component/head-procurement-authorisation/head-procurement-authorisation.component';
import { MinutesComponent } from './component/minutes/minutes.component';
import { NewHeadProcurementAuthorisationComponent } from './component/new-head-procurement-authorisation/new-head-procurement-authorisation.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UserComponent } from './user/user.component';
import { VerifyComponent } from './user/verify/verify.component';
import { LogoutComponent } from './logout/logout.component';



const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'resetpassword', component: ResetpasswordComponent, canActivate: [AuthenticationGuard] },
  { path: 'user/verify/account/:key', component: VerifyComponent, canActivate: [AuthenticationGuard] },
  { path: 'user/verify/password/:key', component: VerifyComponent, canActivate: [AuthenticationGuard] },
  { path: 'profile/:uid', component: ProfileComponent, canActivate: [AuthenticationGuard] },
  { path: 'register', component: RegisterComponent },
  //{ path: 'purchase', component: PurchaseRequastAdminComponent },
  { path: 'stockrequest',  loadChildren: () => import('./stockitemrequest/stockitemrequest.module').then(m => m.StockitemrequestModule)},
 
  { path: 'Dashboard', component: UserComponent, canActivate: [AuthenticationGuard] },
 
  { path: 'HeadProcurementAuthorisationComponent', component: HeadProcurementAuthorisationComponent, canActivate: [AuthenticationGuard] },
  { path: 'HeadProcurementAuthorisation', component: HeadProcurementAuthorisationComponent, canActivate: [AuthenticationGuard] },
  { path: 'minutes', component: MinutesComponent, canActivate: [AuthenticationGuard] },
  {
    path: 'audit',
    component: AuditComponent,

    // canActivate: [AuthenticationGuard]
  },

  { path: 'HeadProcurementAuthorisation/new', component: NewHeadProcurementAuthorisationComponent, canActivate: [AuthenticationGuard] },
  {
    path: 'procurement',
    loadChildren: () => import('./procurement/procurement-module').then(m => m.ProcurementModule)
  },

  
{

    path: 'stockitemrequest',
    loadChildren: () => import('./stockitemrequest/stockitemrequest.module').then(m => m.StockitemrequestModule)
  },




{
    path: 'purchase',
    loadChildren: () => import('./purchase/purchase.module').then(m => m.PurchaseModule)
  },





  {
    path: 'employees',
    loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)
  },





  {
    path: 'assets',
    loadChildren: () => import('./assetsmanage/assetsmanage.module').then(m => m.AssetsmanageModule)
  },



  {
    path: 'inventory',
    loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule)
  },





  {
    path: 'issued',
    loadChildren: () => import('./issued/issued.module').then(m => m.issuedModule)
  },
 
  { path: '', redirectTo: '/', pathMatch: 'full' }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
