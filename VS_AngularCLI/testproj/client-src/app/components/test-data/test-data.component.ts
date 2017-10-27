import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { SideNavProviderService } from './../../services/side-nav-provider.service';

import {TestDataService} from './../../services/test-data-service/test-data.service'
import {TestData} from './../../domain/TestData'

@Component({
  selector: 'app-test-data',
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.css']
})
export class TestDataComponent implements OnInit {
  
  private selected : TestData;
  
  public isLoading  :boolean;
  public storedData : TestData[];

  constructor(public sideNavProvider: SideNavProviderService,testDataService:TestDataService) { 
    this.isLoading=true;
    testDataService.getEntries<TestData>().then(r=>{
      this.storedData = r;  
      this.selected = null;
      this.isLoading=false;
    });
  }
  
  public get selection(): TestData {
    return this.selected;
  }

  public set selection(entry: TestData) {
    if (entry == this.selected) {
      this.selected = null;
    } else {
      this.selected = entry;
    }
  }

  ngOnInit() {
  }

}
