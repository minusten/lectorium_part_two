import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent }   from './app.component';
import { FacultyComponent }   from './faculty/faculty.component';
import { NotFoundComponent }   from './not-found.component';
import { ItemComponent }   from './galery/item.component';
import { HomeComponent } from './home/home.component';
import { ChamberComponent } from  './chamber/chamber.component';

import { AppBootstrapModule } from './app-bootstrap.module';


import { ReactiveFormsModule }    from '@angular/forms';




const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'about', component: FacultyComponent},
    { path: 'galery', component: ItemComponent},
    { path: 'chamber', component: ChamberComponent },
    { path: '**', component: NotFoundComponent }


];

@NgModule({

    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), AppBootstrapModule,
                    ReactiveFormsModule, NgbModule, 
                  ],
    declarations: [
                    AppComponent, HomeComponent,
                    FacultyComponent, NotFoundComponent,
                    ItemComponent,   ChamberComponent,


                ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
