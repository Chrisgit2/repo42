import { Component } from '@angular/core';
import {TestService} from './services/testservice/test.service'
import {MatSidenav} from '@angular/material';
import {ROUTES} from './app-routing.module'
import {SideNavProviderService} from './services/side-nav-provider.service';
import {SizeProviderService} from './services/size-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestService]
})
export class AppComponent { 
  private title = 'app';
  public settingsPath = '/' + ROUTES.SETTINGS;
  public dashboardPath = '/' + ROUTES.DASHBOARD;
  public sideNavMode: string;

  public constructor(public sideNavProvider: SideNavProviderService, private sizeProvider: SizeProviderService) {
    debugger;
    this.sizeProvider.bodySize.subscribe(r => {
      this.sideNavProvider.isMobile.next(r < 40);
    });

    this.sideNavProvider.isMobile.subscribe(r => {
      this.sideNavProvider.sideNavOpen.next(!r);
      this.sideNavMode = r ? "over" : "side";
    });
  }



  public doNavigate() {
    if (this.sideNavProvider.isMobile.value) {
      this.sideNavProvider.sideNavOpen.next(false);
    }
  }
}
