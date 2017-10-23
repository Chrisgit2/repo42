import { Injectable, Output, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SizeProviderService {

  @Output()
  public bodySize: BehaviorSubject<number>;

  public constructor(
    private ngZone: NgZone) {

    window.onresize = (e) => {
      this.refreshFlags();
    };
    
    this.bodySize = new BehaviorSubject(0);
    this.refreshFlags();
  }

  private refreshFlags() {
    this.ngZone.run(() => {
      this.bodySize.next(window.innerWidth / this.getEmSize(document.body));
    });
  }

  private getEmSize(el: Element): number {
    return Number(getComputedStyle(el, "").fontSize.match(/(\d+)px/)[1]);
  }
}
