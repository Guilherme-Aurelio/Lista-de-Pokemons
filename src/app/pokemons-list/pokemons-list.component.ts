import { Component, Input, OnInit } from '@angular/core';
import { PokemonsApiService } from '../pokemons-api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {
  searchTerm!: string;
  pokemons: any[] = [];
  pokemonsSelecionado?: any;

  constructor(
    private pokemonsApiService: PokemonsApiService, 
    private router: Router,
    private http: HttpClient) { }
  
    ngOnInit(): void {
   this.onListar();
  }

   onListar(): void {
    this.pokemonsApiService.getPokemonsList().subscribe({
      next: (resultado: any) => (this.pokemons = resultado)
    });

  } 

   onRowSelect(i: number): void {
    this.router.navigate(['/detalhes-list', i])
    ;
  }
  
  search() {
    this.pokemonsApiService.getPokemonsList().subscribe(pokemons => {
      this.pokemons = pokemons.filter((pokemons: { pokemon_name: string; }) => pokemons.pokemon_name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    });
  }
}