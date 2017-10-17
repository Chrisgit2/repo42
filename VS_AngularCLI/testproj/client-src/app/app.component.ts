import { Component } from '@angular/core';
import {TestService} from './services/testservice/test.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestService]
})
export class AppComponent {
  title = this.testservice.getTitle();
  constructor(private testservice: TestService) {}
}
