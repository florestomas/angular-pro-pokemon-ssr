import { ApplicationRef, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { PokemonList } from '../../pokemons/components/pokemon-list/pokemon-list';
import { PokemonListSkeleton } from './ui/pokemon-list-skeleton/pokemon-list-skeleton';

@Component({
  selector: 'pokemons-page',
  imports: [PokemonListSkeleton, PokemonList],
  templateUrl: './pokemons-page.html',
})
export default class PokemonsPage implements OnInit /* , OnDestroy */ {
  /*   public isLoading = signal(true);

  private appRef = inject(ApplicationRef);

  private $appState = this.appRef.isStable.subscribe((isStable) => {
    console.log({ isStable });
  }); */

  ngOnInit(): void {
    /* setTimeout(() => {
      this.isLoading.set(false);
    }, 1500); */
  }
  /*
  ngOnDestroy(): void {
    console.log('destroy');
    this.$appState.unsubscribe();
  } */
}
