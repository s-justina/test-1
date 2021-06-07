import {IHero} from "../interfaces";

export enum HeroesActionName {
    ADD_FETCHED_HEROES = 'ADD_FETCHED_HEROES',
    ADD_CREATED_HERO = 'ADD_CREATED_HERO',
    REMOVE_DELETED_HERO = 'REMOVE_DELETED_HERO',
    DISPLAY_MORE_HEROES = 'DISPLAY_MORE_HEROES',
    RESET_HEROES_LIST_TO_DISPLAY = 'RESET_HEROES_LIST_TO_DISPLAY'
}

export const displayMoreHeroes = () => {
    return {
        type: HeroesActionName.DISPLAY_MORE_HEROES,
    }
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

export const removeHero = (hero: IHero) => {
    return {
        type: HeroesActionName.REMOVE_DELETED_HERO,
        payload: hero
    }
}
