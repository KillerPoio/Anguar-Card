import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomelanderComponent } from './homelander/homelander.component';
import { HulkComponent } from './hulk/hulk.component';
import { SupermanComponent } from './superman/superman.component';

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
