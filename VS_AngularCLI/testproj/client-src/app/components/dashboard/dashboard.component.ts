import { Component, OnInit } from '@angular/core';

import { SideNavProviderService } from './../../services/side-nav-provider.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public sideNavProvider: SideNavProviderService) { 
  }

  ngOnInit() {
  }

}
