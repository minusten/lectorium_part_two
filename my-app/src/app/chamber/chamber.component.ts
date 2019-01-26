import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';


@Component({
    selector: 'about-app',
    template: `
    <div class = 'tittle'><h2> Добро пожаловать в дневник Тома Реддла! </h2></div>
    <form class= 'menu'>
  <div class="form-group">
    <input  class="form-control" placeholder="Поздоровайтесь!">
      <button type="button" class="btn btn-outline-dark">Сказать</button>
  </div>


  </form>
  `,



})
export class ChamberComponent {

}
