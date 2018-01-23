import {
  FEATURED_COLLECTIONS_FETCH_START,
  FEATURED_COLLECTIONS_FETCH_SUCCESS,
  FEATURED_COLLECTIONS_FETCH_ERROR,
  FEATURED_COLLECTION_PHOTOS_FETCH_SUCCESS
} from "../constants/ActionTypes";

export default function(state = { dict: {} }, action) {
  switch(action.type) {
    case FEATURED_COLLECTIONS_FETCH_START: {
      return {  ...state, pending: true };
    }
    case FEATURED_COLLECTIONS_FETCH_SUCCESS: {
      const collectionsDict = action.payload.reduce((dict, curr, i) => {
        dict[curr.id] = curr;
        return dict;
      }, {});

      return {  ...state, pending: false, dict: collectionsDict };
    }
    case FEATURED_COLLECTIONS_FETCH_ERROR: {
      return {  ...state, pending: false };
    }

    case FEATURED_COLLECTION_PHOTOS_FETCH_SUCCESS: {
      const { collectionId, json } = action.payload;
      let collectionsDict = { ...state.dict };

      collectionsDict[collectionId].latestPhotos = json;
      return { ...state, dict: collectionsDict };
    }
  }

  return state;
}