import { ApplicationRef, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { PokemonList } from '../../pokemons/components/pokemon-list/pokemon-list';
import { PokemonListSkeleton } from './ui/pokemon-list-skeleton/pokemon-list-skeleton';
import { Pokemons } from '../../pokemons/services/pokemons';

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

  ngOnInit(): void {
    this.loadPokemons();
  }
  /*
  ngOnDestroy(): void {
    console.log('destroy');
    this.$appState.unsubscribe();
  } */

  public loadPokemons(page = 0) {
    this.pokemonsService.loadpage(page).subscribe((pokemons) => {
      console.log('On Init');
    });
  }
}
