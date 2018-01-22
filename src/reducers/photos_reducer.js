import {
  PHOTOS_FETCH_START,
  PHOTOS_FETCH_SUCCESS,
  PHOTOS_FETCH_ERROR,
  PHOTO_FETCH_START,
  PHOTO_FETCH_SUCCESS,
  PHOTO_FETCH_ERROR
} from "../constants/ActionTypes";

export default function(state = { data: [], singleDict: {} }, action) {
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

    case PHOTO_FETCH_START: {
      return {  ...state, singlePending: true };
    }
    case PHOTO_FETCH_SUCCESS: {
      let singleDict = { ...state.singleDict };
      singleDict[action.payload.id] = action.payload;
      return {  ...state, singlePending: false, singleDict };
    }
    case PHOTO_FETCH_ERROR: {
      return {  ...state, singlePending: false };
    }
  }

  return state;
}