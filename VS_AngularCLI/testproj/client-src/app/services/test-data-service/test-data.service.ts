import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import{BaseDomainService} from './../../services/domain/base-domain-service/base-domain.service'
import {TestData} from './../../Domain/TestData'

@Injectable()
export class TestDataService extends BaseDomainService<TestData> {

    public constructor(public http:Http) {
      super(http);
      this.Endpoint = this.baseString + 'data';
    }
}
