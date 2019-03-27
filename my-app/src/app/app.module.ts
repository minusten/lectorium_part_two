import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent }   from './app.component';
import { FacultyComponent }   from './components/faculty/faculty.component';
import { NotFoundComponent }   from './components/not-found.component';
import { ItemComponent }   from './components/galery/item.component';
import { HomeComponent } from './components/home/home.component';
import { ChamberComponent } from  './components/chamber/chamber.component';

import { AppBootstrapModule } from './app-bootstrap.module';






const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'about', component: FacultyComponent},
    { path: 'galery', component: ItemComponent},
    { path: 'chamber', component: ChamberComponent },
    { path: '**', component: NotFoundComponent }


];

@NgModule({

    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), AppBootstrapModule,
                   NgbModule,
                  ],
    declarations: [
                    AppComponent, HomeComponent,
                    FacultyComponent, NotFoundComponent,
                    ItemComponent,   ChamberComponent,


                ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
