import { Component, OnInit } from '@angular/core';

import { SideNavProviderService } from './../../services/side-nav-provider.service';

@Component({
  selector: 'app-test-data',
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.css']
})
export class TestDataComponent implements OnInit {

  constructor(public sideNavProvider: SideNavProviderService) { 
  }

  ngOnInit() {
  }

}
