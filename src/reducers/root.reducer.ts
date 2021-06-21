import {combineReducers} from 'redux'
import {IHero, IHeroType} from "../interfaces";
import heroesReducers, {HeroesState} from './heroes.reducer'

export interface AppState {
  heroes: HeroesState;
  heroTypes: IHeroType[];
}

export const rootReducer = combineReducers<AppState>({
    heroes: heroesReducers.heroes,
    heroTypes: heroesReducers.heroTypes,
});
