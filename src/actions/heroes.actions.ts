import {IHero} from "../interfaces";

export enum HeroesActionName {
    ADD_FETCHED_HEROES='ADD_FETCHED_HEROES',
    ADD_CREATED_HERO='ADD_CREATED_HERO'
}

export const addFetchedHeroes = (heroes: IHero[]) => {
   return {
       type: HeroesActionName.ADD_FETCHED_HEROES,
       payload: heroes
   }
};

export const addCreatedHero = (hero: IHero) => {
    return {
        type: HeroesActionName.ADD_CREATED_HERO,
        payload: hero
    }
}