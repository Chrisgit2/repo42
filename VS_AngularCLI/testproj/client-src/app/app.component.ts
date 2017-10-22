import { Component } from '@angular/core';
import {TestService} from './services/testservice/test.service'
import {MatSidenav} from '@angular/material';
import {ROUTES} from './app-routing.module'
import { SideNavProviderService } from './services/side-nav-provider.service';

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
  constructor(private sideNavProvider: SideNavProviderService) {}

  public doNavigate() {
    if (this.sideNavProvider.isMobile.value) {
      this.sideNavProvider.sideNavOpen.next(false);
    }
  }
}
