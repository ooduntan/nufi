import { FETCHED_CONFERENCES_FROM_API } from "./actionTypes";

export const conferencesInitialState = {
  conferenceList: [],
  loading: false,
  displayedConference: []
};

export const conferences = (
  state = conferencesInitialState,
  { type, values }
) => {
  switch (type) {
    case FETCHED_CONFERENCES_FROM_API:
      return Object.assign(
        {},
        state,
        { conferenceList: values.data },
        { displayedConference: values.data }
      );
    default:
      return state;
  }
};
