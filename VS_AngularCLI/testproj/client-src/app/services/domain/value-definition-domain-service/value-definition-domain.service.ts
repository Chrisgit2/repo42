import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import{BaseDomainService} from './../../../services/domain/base-domain-service/base-domain.service'
import {ValueDefinition} from './../../../Domain/Valuedefinition'

@Injectable()
export class ValueDefinitionDomainService  extends BaseDomainService<ValueDefinition> {
  
      public constructor(public http:Http) {
        super(http);
        this.Endpoint = this.baseString + 'valuedefinition';
      }
  }
