import {combineReducers} from 'redux'
import {IHero, IHeroType} from "../interfaces";
import heroesReducers from './heroes.reducer'

export interface AppState {
    heroes: IHero[];
    heroTypes: IHeroType[]

}

export const rootReducer = combineReducers<AppState>({
    heroes: heroesReducers.heroes,
    heroTypes: heroesReducers.heroTypes
});
