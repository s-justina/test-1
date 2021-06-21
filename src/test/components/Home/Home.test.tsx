import React from "react";
import * as reactRedux from "react-redux";
import configureStore from "redux-mock-store";
import { configure, mount, ReactWrapper } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { heroesInitialState } from "../../../reducers/heroes.reducer";
import Home from "../../../components/Home";
import { HeroesActionName } from "../../../actions/heroes.actions";
import { mockHeroesList } from "../../reducers/heroes.reducer.test";
import * as reactRouter from "react-router";

configure({ adapter: new Adapter() });
const mockStore = configureStore();

jest.mock("react-router");

const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
const useParamsMock = jest.spyOn(reactRouter, "useParams");
const useLocationMock = jest.spyOn(reactRouter, "useLocation");

const initialReduxState = {
  heroes: {
    ...heroesInitialState,
    perPage: 1,
    heroesList: mockHeroesList,
    heroesListToDisplay: mockHeroesList,
  },
  heroTypes: [],
};

describe("<Home>", () => {
  let wrapper: ReactWrapper<{}, {}, {}>;

  const mockDispatch = jest.fn();
  const mockParams = jest.fn().mockReturnValue({
    id: "1234",
  });
  const mockLocation = jest.fn().mockReturnValue({
    state: {},
  });

  beforeEach(() => {
    useDispatchMock.mockReturnValue(mockDispatch); // mocking useDispatch() call
    useParamsMock.mockReturnValue(mockParams);
    useLocationMock.mockReturnValue(mockLocation);

    wrapper = mount(
      <reactRedux.Provider store={mockStore(initialReduxState)}>
        <Home />
      </reactRedux.Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();
  });

  it("should call displayMoreHeroes on load more button press", () => {
    wrapper.find("#LoadMoreButton").at(1).simulate("click");
    expect(mockDispatch).toHaveBeenCalledWith({
      type: HeroesActionName.DISPLAY_MORE_HEROES,
    });
  });
});
