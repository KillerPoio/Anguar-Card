import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { HomelanderComponent } from './Components/homelander/homelander.component';
import { HulkComponent } from './Components/hulk/hulk.component';
import { SupermanComponent } from './Components/superman/superman.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'SupermanInfo', component: SupermanComponent},
  {path: 'HulkInfo', component: HulkComponent},
  {path: 'homelanderInfo', component: HomelanderComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
