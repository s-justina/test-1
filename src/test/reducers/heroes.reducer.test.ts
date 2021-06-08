import {
  heroesInitialState,
  heroes,
} from "../../reducers/heroes.reducer";
import { HeroesActionName } from "../../actions/heroes.actions";

export const mockHeroesList = [
  {
    avatar_url: "avatar_url",
    description: "description",
    full_name: "full_name",
    id: "11",
    type: {
      id: "1",
      name: "name",
    },
  },
  {
    avatar_url: "avatar_url",
    description: "description",
    full_name: "full_name",
    id: "22",
    type: {
      id: "2",
      name: "name",
    },
  },
  {
    avatar_url: "avatar_url",
    description: "description",
    full_name: "full_name",
    id: "33",
    type: {
      id: "3",
      name: "name",
    },
  },
];

describe("heroes tests", () => {
  it("should return correct initial state", () => {
    expect(
      heroes(undefined, {
        payload: null,
        type: "",
      })
    ).toStrictEqual(heroesInitialState);
  });

  it("should return correct state on ADD_FETCHED_HEROES action call", () => {
    expect(
      heroes(undefined, {
        payload: mockHeroesList,
        type: HeroesActionName.ADD_FETCHED_HEROES,
      })
    ).toStrictEqual({
      ...heroesInitialState,
      heroesList: mockHeroesList,
      heroesListToDisplay: mockHeroesList,
    });
  });

  it("should return correct state on ADD_CREATED_HERO action call", () => {
    expect(
      heroes(undefined, {
        payload: mockHeroesList[0],
        type: HeroesActionName.ADD_CREATED_HERO,
      })
    ).toStrictEqual({
      ...heroesInitialState,
      heroesList: [mockHeroesList[0]],
      heroesListToDisplay: [mockHeroesList[0]],
    });
  });

  it("should return correct state on REMOVE_DELETED_HERO action call", () => {
    const mockCutHeroesList = [
      {
        avatar_url: "avatar_url",
        description: "description",
        full_name: "full_name",
        id: "22",
        type: {
          id: "2",
          name: "name",
        },
      },
      {
        avatar_url: "avatar_url",
        description: "description",
        full_name: "full_name",
        id: "33",
        type: {
          id: "3",
          name: "name",
        },
      },
    ];

    expect(
      heroes(
        {
          ...heroesInitialState,
          heroesList: mockHeroesList,
        },
        {
          payload: mockHeroesList[0],
          type: HeroesActionName.REMOVE_DELETED_HERO,
        }
      )
    ).toStrictEqual({
      ...heroesInitialState,
      heroesList: mockCutHeroesList,
      heroesListToDisplay: mockCutHeroesList,
    });
  });

  it("should return correct state on DISPLAY_MORE_HEROES action call", () => {
    expect(
      heroes(
        {
          ...heroesInitialState,
          heroesList: mockHeroesList,
          perPage: 1, // setting per page to 1, should display one hero
        },
        {
          payload: null,
          type: HeroesActionName.DISPLAY_MORE_HEROES,
        }
      )
    ).toStrictEqual({
      ...heroesInitialState,
      heroesList: mockHeroesList,
      heroesListToDisplay: [mockHeroesList[0], mockHeroesList[1]], // should display two heroes now
      currentPage: 2,
      perPage: 1,
    });
  });

  it("should return correct state on RESET_HEROES_LIST_TO_DISPLAY action call", () => {
    expect(
      heroes(
        {
          ...heroesInitialState,
          heroesList: mockHeroesList,
          perPage: 1, // setting currentPage to 3, should display three heroes,
          currentPage: 3,
        },
        {
          payload: null,
          type: HeroesActionName.RESET_HEROES_LIST_TO_DISPLAY,
        }
      )
    ).toStrictEqual({
      ...heroesInitialState,
      heroesList: mockHeroesList,
      heroesListToDisplay: [mockHeroesList[0]], // should display one heroe now
      currentPage: 1,
      perPage: 1,
    });
  });
});
