import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {AppMaterialModule} from './app-material.module';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SideNavProviderService } from './services/side-nav-provider.service';
import { SizeProviderService } from './services/size-provider.service';
import { TestDataComponent } from './components/test-data/test-data.component';
import { TestDataService } from './services/test-data-service/test-data.service';
import { BaseObjectGeneratorService } from './services/domain/base-object-generator/base-object-generator.service';
import { BaseDomainService } from './services/domain/base-domain-service/base-domain.service';
import { ValueDefinitionDomainService } from './services/domain/value-definition-domain-service/value-definition-domain.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    TestDataComponent
  ],
  imports: [
    AppMaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule    
  ],
  providers: [SideNavProviderService, SizeProviderService, TestDataService, BaseObjectGeneratorService, BaseDomainService, ValueDefinitionDomainService, ValueDefinitionDomainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
