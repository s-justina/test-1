import { IHero, IHeroType } from "../interfaces";
import { HeroesActionName } from "../actions/heroes.actions";
import _ from "lodash";

export interface HeroesState {
  heroesList: IHero[];
  heroesListToDisplay: IHero[];
  currentPage: number;
  perPage: number;
}

export const heroesInitialState: HeroesState = {
  heroesList: [],
  heroesListToDisplay: [],
  currentPage: 1,
  perPage: 5,
};

export const heroes = (
  state = heroesInitialState,
  action: {
    type: string;
    payload?: any;
  }
) => {
  switch (action.type) {
    case HeroesActionName.ADD_FETCHED_HEROES:
      return {
        ...state,
        heroesList: action.payload.filter((hero: IHero) => hero),
        heroesListToDisplay: action.payload.slice(0, state.perPage),
      };
    case HeroesActionName.ADD_CREATED_HERO:
      const newHeroesList = [...state.heroesList, action.payload];
      return {
        ...state,
        heroesList: newHeroesList,
        heroesListToDisplay: newHeroesList.slice(
          0,
          state.perPage * state.currentPage
        ),
      };
    case HeroesActionName.REMOVE_DELETED_HERO:
      const newHeroesListAfterHeroRemoval = state.heroesList.filter(
        (hero) => hero.id !== action.payload.id
      );
      return {
        ...state,
        heroesList: newHeroesListAfterHeroRemoval,
        heroesListToDisplay: newHeroesListAfterHeroRemoval.slice(
          0,
          state.perPage * state.currentPage
        ),
      };
    case HeroesActionName.DISPLAY_MORE_HEROES:
      const newCurrentPage = state.currentPage + 1;
      return {
        ...state,
        currentPage: newCurrentPage,
        heroesListToDisplay: state.heroesList.slice(
          0,
          state.perPage * newCurrentPage
        ),
      };
    case HeroesActionName.RESET_HEROES_LIST_TO_DISPLAY:
      return {
        ...state,
        currentPage: heroesInitialState.currentPage,
        heroesListToDisplay: state.heroesList.slice(
          0,
          heroesInitialState.currentPage
        ),
      };
    default:
      return state;
  }
};

const heroTypesInitialState: IHeroType[] = [];

export const heroTypes = (
  state = heroTypesInitialState,
  action: {
    type: string;
    payload?: any;
  }
) => {
  switch (action.type) {
    case HeroesActionName.ADD_FETCHED_HEROES:
      return _.uniqBy<IHeroType>(
        action.payload
          .map((hero: IHero) => hero?.type)
          .filter((hero: IHeroType) => hero),
        "id"
      );
    default:
      return state;
  }
};

const heroesReducers = {
  heroes,
  heroTypes,
};

export default heroesReducers;
