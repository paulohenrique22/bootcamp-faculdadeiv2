import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { RestauranteComponent } from './pages/restaurante/restaurante.component';
import { NovoRestauranteComponent } from './pages/novo-restaurante/novo-restaurante.component';
import { RestaurantesComponent } from './pages/restaurantes/restaurantes.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltroRestaurantePipe } from './shared/filtro-restaurante.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    RestauranteComponent,
    NovoRestauranteComponent,
    FiltroRestaurantePipe,
    RestaurantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,

    //Forms
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    // material
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [FiltroRestaurantePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
