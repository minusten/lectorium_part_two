import { Component} from '@angular/core';
import {Router} from '@angular/router';
import { NgModel} from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {}
