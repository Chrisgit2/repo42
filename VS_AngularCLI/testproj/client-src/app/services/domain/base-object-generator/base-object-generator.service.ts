import { Injectable } from '@angular/core';

@Injectable()
export class BaseObjectGeneratorService <T> {
  constructor(private objType: new () => T) {    
  }  
  public Generate(): T {
    return new this.objType();
  }
  public AssignData(target: T, data: any) {
    Object.assign(target,data);
  }
}
