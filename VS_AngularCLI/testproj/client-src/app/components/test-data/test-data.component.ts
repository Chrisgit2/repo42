import { Component, OnInit } from '@angular/core';

import { SideNavProviderService } from './../../services/side-nav-provider.service';

import {TestDataService} from './../../services/test-data-service/test-data.service'

@Component({
  selector: 'app-test-data',
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.css']
})
export class TestDataComponent implements OnInit {

  constructor(public sideNavProvider: SideNavProviderService,testDataService:TestDataService) { 
    
  }

  ngOnInit() {
  }

}
