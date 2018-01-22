import {
  PHOTOS_FETCH_START,
  PHOTOS_FETCH_SUCCESS,
  PHOTOS_FETCH_ERROR
} from "../constants/ActionTypes";

export default function(state = { data: [] }, action) {
  switch(action.type) {
    case PHOTOS_FETCH_START: {
      return {  ...state, pending: true };
    }
    case PHOTOS_FETCH_SUCCESS: {
      const concatedArr = state.data.concat(action.payload);
      return {  ...state, pending: false, data: concatedArr };
    }
    case PHOTOS_FETCH_ERROR: {
      return {  ...state, pending: false };
    }
  }

  return state;
}