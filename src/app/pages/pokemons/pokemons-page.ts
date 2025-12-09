import { ApplicationRef, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { PokemonList } from '../../pokemons/components/pokemon-list/pokemon-list';
import { PokemonListSkeleton } from './ui/pokemon-list-skeleton/pokemon-list-skeleton';
import { Pokemons } from '../../pokemons/services/pokemons';
import { SimplePokemon } from '../../pokemons/interfaces';

@Component({
  selector: 'pokemons-page',
  imports: [PokemonListSkeleton, PokemonList],
  templateUrl: './pokemons-page.html',
})
export default class PokemonsPage implements OnInit /* , OnDestroy */ {
  public isLoading = signal(true);

  private pokemonsService = inject(Pokemons);

  /*   private appRef = inject(ApplicationRef);

  private $appState = this.appRef.isStable.subscribe((isStable) => {
    console.log({ isStable });
  });  */
  /*
  ngOnDestroy(): void {
    console.log('destroy');
    this.$appState.unsubscribe();
  } */
  ngOnInit(): void {
    this.loadPokemons();
  }

  public loadPokemons(page = 0) {
    this.pokemonsService.loadpage(page).subscribe((pokemons) => {
      //console.log('On Init');
      this.pokemons.set(pokemons);
    });
  }

  public pokemons = signal<SimplePokemon[]>([]);
}
