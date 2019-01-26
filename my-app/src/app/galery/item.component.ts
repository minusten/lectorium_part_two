import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'item-info',
    template: `<carousel>
  <slide>
    <img src="assets/image/gal1.jpg" alt="first slide" style="display: block; width: 100%;">
  </slide>
  <slide>
    <img src="assets/image/gal2.jpg" alt="second slide" style="display: block; width: 100%;">
  </slide>
  <slide>
    <img src="assets/image/gal3.jpg" alt="third slide" style="display: block; width: 100%;">
  </slide>
</carousel>`
})
export class ItemComponent {

  
}
