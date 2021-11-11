import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//rutas
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SupermanComponent } from './Components/superman/superman.component';
import { HomeComponent } from './Components/home/home.component';
import { HulkComponent } from './Components/hulk/hulk.component';
import { HomelanderComponent } from './Components/homelander/homelander.component';

/**
 * declaracion de componentes
 */
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
