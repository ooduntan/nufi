import axios from "axios";

import {
  FETCHED_CONFERENCES_FROM_API,
  UPDATE_CONFERENCE_PAGE_SIZE,
  ERROR_FETCHING_DATA,
} from "Reducer/actionTypes";
import { apiBaseUrl } from "Config";
import { fetchingStatus } from 'Actions'

export const populateConference = (data, limit) => ({
  type: FETCHED_CONFERENCES_FROM_API,
  values: {
    data,
    limit
  }
});

export const updateDisplaySize = pageSize => ({
  type: UPDATE_CONFERENCE_PAGE_SIZE,
  values: {
    pageSize
  }
});

export const  errorFetchingData = (error) => ({
  type: ERROR_FETCHING_DATA,
  values: {
    error
  }
})

export const fetchConference = () => async dispatch => {
  dispatch(fetchingStatus(true));
  try {
    const { data } = await axios.get(`${apiBaseUrl}/conferences`);
    dispatch(populateConference(data));
  } catch (error) {
    dispatch(errorFetchingData(error));
  } finally {
    dispatch(fetchingStatus(false));
  }
}