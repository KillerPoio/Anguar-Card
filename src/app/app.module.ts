import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//rutas
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SupermanComponent } from './superman/superman.component';
import { HomeComponent } from './home/home.component';
import { HulkComponent } from './hulk/hulk.component';
import { HomelanderComponent } from './homelander/homelander.component';


@NgModule({
  declarations: [
    AppComponent,
    SupermanComponent,
    HomeComponent,
    HulkComponent,
    HomelanderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
