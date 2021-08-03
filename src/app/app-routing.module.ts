import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantesComponent } from './pages/restaurantes/restaurantes.component';

const routes: Routes = [
  {
    path: 'home',
    component: RestaurantesComponent,
    pathMatch: 'full'
  },{
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
