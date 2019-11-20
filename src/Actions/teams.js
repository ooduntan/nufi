import axios from "axios";

import {
  FETCHED_TEAM_FROM_API,
  FETCHING_TEAMS,
  UPDATE_PAGE_SIZE,
  FILTER_DISPLAY_TEAM
} from "Reducer/actionTypes";
import { apiBaseUrl } from "Config";

export const populateTeams = (data, limit) => ({
  type: FETCHED_TEAM_FROM_API,
  values: {
    data,
    limit
  }
});

export const fetchingStatus = loading => ({
  type: FETCHING_TEAMS,
  values: {
    loading
  }
});

export const fetchTeamError = error => ({
  type: FETCHING_TEAMS,
  values: {
    error
  }
});

export const updateDisplaySize = pageSize => ({
  type: UPDATE_PAGE_SIZE,
  values: {
    pageSize
  }
});

export const fetchTeams = limit => async dispatch => {
  dispatch(fetchingStatus(true));
  try {
    const { data } = await axios.get(`${apiBaseUrl}/teams`);
    dispatch(populateTeams(data, limit));
    dispatch(fetchingStatus(false));
  } catch (error) {
    dispatch(fetchTeamError(error));
    dispatch(fetchingStatus(false));
  }
};

export const filterByConference = conference => ({
  type: FILTER_DISPLAY_TEAM,
  values: {
    conference
  }
});
