import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'about-app',
    templateUrl: './chamber.component.html',
    styleUrls: ['./chamber.component.scss']

})
export class ChamberComponent {
  public show:boolean = false;
public buttonName:any = 'Открыть';

ngOnInit () {  }

toggle() {
  this.show = !this.show;

  if(this.show)
    this.buttonName = "Закрыть";
  else
    this.buttonName = "Открыть";
}

}
