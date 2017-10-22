import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';


export class ROUTES
{
    public static DASHBOARD: string = 'dashboard';       
    public static SETTINGS: string = 'settings';   
}

const routes: Routes = 
[
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: ROUTES.DASHBOARD, component: DashboardComponent},
    {path: ROUTES.SETTINGS, component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }