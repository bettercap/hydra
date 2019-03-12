import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './components/login/login.component';

import { LanTableComponent } from './components/lan-table/lan-table.component';
import { WifiTableComponent } from './components/wifi-table/wifi-table.component';
import { BleTableComponent } from './components/ble-table/ble-table.component';
import { HidTableComponent } from './components/hid-table/hid-table.component';
import { ModuleOptionsComponent } from './components/module-options/module-options.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'lan', component: LanTableComponent, canActivate: [AuthGuard]},
  { path: 'ble', component: BleTableComponent, canActivate: [AuthGuard]},
  { path: 'wifi', component: WifiTableComponent,  canActivate: [AuthGuard]},
  { path: 'hid', component: HidTableComponent,  canActivate: [AuthGuard]},

  { path: '**', redirectTo: 'lan' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
