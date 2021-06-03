import {IHero, IHeroType} from "../interfaces";
import {HeroesActionName} from "../actions/heroes.actions";
import _ from 'lodash'

const heroesInitialState: IHero[] = []

const heroes = (state = heroesInitialState, action: {
    type: string,
    payload?: any
}) => {
    switch(action.type){
        case HeroesActionName.ADD_FETCHED_HEROES:
            return action.payload.filter((hero: IHero) => hero)
        case HeroesActionName.ADD_CREATED_HERO:
            return [...state, action.payload]
        default:
            return state
    }
}

const heroTypesInitialState: IHeroType[] = []

const heroTypes = (state = heroTypesInitialState, action: {
    type: string,
    payload?: any
}) => {
    switch(action.type){
        case HeroesActionName.ADD_FETCHED_HEROES:
           return _.uniqBy<IHeroType>(action.payload.map((hero: IHero) => hero?.type).filter((hero: IHeroType) => hero), 'id')
        default:
            return state
    }
}

const heroesReducers = {
    heroes,
    heroTypes
}

export default heroesReducers