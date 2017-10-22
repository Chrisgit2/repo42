import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';


export class ROUTES
{
    public static DASHBOARD: string = 'dashboard';       
}

const routes: Routes = 
[
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: ROUTES.DASHBOARD, component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }