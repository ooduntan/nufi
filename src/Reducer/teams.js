import {
  FETCHED_TEAM_FROM_API,
  FETCHING_TEAMS,
  FILTER_DISPLAY_TEAM
} from "./actionTypes";

export const teamInitialState = {
  allTeam: [],
  loading: false,
  displayedTeam: []
};

export const teams = (state = teamInitialState, { type, values }) => {
  switch (type) {
    case FETCHING_TEAMS:
      return { ...state, ...values }
    case FETCHED_TEAM_FROM_API:
      const { data } = values;
      return Object.assign(
        {},
        state,
        { allTeam: data },
        { displayedTeam: data }
      );
    case FILTER_DISPLAY_TEAM:
      return {
        ...state,
        displayedTeam: values.conference ? state.allTeam
          .filter(({ conference }) => conference === values.conference)
          : state.allTeam
      };
    default:
      return state;
  }
};
