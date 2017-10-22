import { Injectable, Output, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class SideNavProviderService {
  
  @Output()
  public isMobile: BehaviorSubject<boolean>;
  @Output()
  public sideNavOpen: BehaviorSubject<boolean>;
  @Output()
  public needHamburger: BehaviorSubject<boolean>;

  public constructor(private ngZone: NgZone) {
    this.isMobile = new BehaviorSubject(false);
    this.sideNavOpen = new BehaviorSubject(true);
    this.needHamburger = new BehaviorSubject(false);
    this.isMobile.subscribe(r => this.updateNeedHamburger());
    this.sideNavOpen.subscribe(r => this.updateNeedHamburger());
  }

  public toggle() {
    this.ngZone.run(() => {
      this.sideNavOpen.next(!this.sideNavOpen.value);
    });
  }

  private updateNeedHamburger() {
    this.ngZone.run(() => {
      this.needHamburger.next(!this.sideNavOpen.value || this.isMobile.value);
   });
  }

}
