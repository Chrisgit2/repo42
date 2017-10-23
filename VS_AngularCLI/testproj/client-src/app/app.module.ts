import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppMaterialModule} from './app-material.module';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SideNavProviderService } from './services/side-nav-provider.service';
import { SizeProviderService } from './services/size-provider.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    AppMaterialModule,
    BrowserModule,
    AppRoutingModule    
  ],
  providers: [SideNavProviderService, SizeProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
