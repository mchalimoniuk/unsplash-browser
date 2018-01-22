import {
  PHOTOS_FETCH_START,
  PHOTOS_FETCH_SUCCESS,
  PHOTOS_FETCH_ERROR
} from "../constants/ActionTypes";

export default function(state = {}, action) {
  switch(action.type) {
    case PHOTOS_FETCH_START: {
      return {  ...state, pending: true };
    }
    case PHOTOS_FETCH_SUCCESS: {
      return {  ...state, pending: false, data: action.payload };
    }
    case PHOTOS_FETCH_ERROR: {
      return {  ...state, pending: false };
    }
  }

  return state;
}