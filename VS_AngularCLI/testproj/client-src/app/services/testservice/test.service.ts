import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  public getTitle() {
    return 'Hi from testit.service.ts'
  }

  constructor() { }
}
