import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { DetalhesListComponent } from './detalhes-list/detalhes-list.component';

import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import {AccordionModule} from 'primeng/accordion'; 
import {MenuItem} from 'primeng/api';  
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { environment } from '../environment';
console.log(environment.production);


@NgModule({
  declarations: [
    AppComponent,
    PokemonsListComponent,
    DetalhesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    AccordionModule,
    FormsModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
