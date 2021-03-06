import { Component} from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
    selector: 'home-app',
    template: `

    <div class="main-container">
        <div class="main-title"> <h1> Невероятные сенсации нашего университета... </h1></div>

    <div class ='container'>

    <div class = 'rita'> <img class = 'rita-img' src ='assets/image/rita.gif' width = '190px' height = '170px'/> <h3> История сама себя не напишет </h3> </div>
    <div class = 'blog'>
          <div class = 'post'><h2> <b> Неожиданное преображение Северуса Снейпа.
            Альбус Дамблдор отказывается комментировать данную ситуацию...
          </b></h2>
            <img src ='assets/image/snape.jpg' class="snape"/>
            <div class="post-content"><h3>Сегодня Ежедневный Пророк взял интервью у самого загадочного профессора Хогвартского университета -
            Сереруса Снейпа. Как мы позже узнали, профессор, преподающий большую часть своей жизни, зельеварнение,
            имея при этом неугасаемое желание работать на посте преподавателя защиты от тёмных искусств, имеет
            свои способы отвлечения от душевной боли, порождаемой невозможностью <a class ='url'>читать далее...</a></h3></div>
            <ngb-rating [(rate)]="currentRate"></ngb-rating>
<hr>
<pre>Rate: <b>{{currentRate}}</b></pre>

           </div>
     </div>
     </div>

     </div>`,
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
currentRate = '';}
