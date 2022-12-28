import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { DetalhesListComponent } from './detalhes-list/detalhes-list.component';

const routes: Routes = [
  { path: 'pokemons-list', component: PokemonsListComponent },
  { path: 'detalhes-list/:id', component: DetalhesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
