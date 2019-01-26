import { Component} from '@angular/core';
import {Router} from '@angular/router';
import { NgModel} from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@Component({
    selector: 'my-app',
    template: `
    <div class= "main-cont">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">
    <img src="assets/image/logo.jpg" width="70" height="70" class="d-inline-block align-top" alt=""></a>
                        <a routerLink=""><h2 class = 'menu'>Главная</h2></a>
                        <a routerLink="/about"><h2 class ='menu2'>Факультеты</h2></a>
                        <a routerLink="/galery"><h2 class ='menu3'>Галерея</h2></a>
                        <a routerLink="/chamber"><h2 class ='menu4'>Тайная комната</h2></a>

                    </nav>
                    <router-outlet></router-outlet>
               </div>`,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {}
