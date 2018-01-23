import { toJson } from "unsplash-js";
import unsplash from "../helpers/unsplash";

import { 
  FEATURED_COLLECTIONS_FETCH_START,
  FEATURED_COLLECTIONS_FETCH_SUCCESS,
  FEATURED_COLLECTIONS_FETCH_ERROR,
  FEATURED_COLLECTION_PHOTOS_FETCH_START,
  FEATURED_COLLECTION_PHOTOS_FETCH_SUCCESS,
  FEATURED_COLLECTION_PHOTOS_FETCH_ERROR
} from "../constants/ActionTypes";


export function fetchFeaturedCollections() {
  return function(dispatch) {
    dispatch({ type: FEATURED_COLLECTIONS_FETCH_START });
    unsplash.collections.listFeaturedCollections(1, 10)
      .then(toJson)
      .then(json => {
        dispatch(fetchFeaturedCollectionsSuccess(json));
        json.forEach(j => {
            dispatch(fetchFeaturedCollectionPhotos(j.id));
        });
    });
  }
}

export function fetchFeaturedCollectionsSuccess(data) {
  return {
    type: FEATURED_COLLECTIONS_FETCH_SUCCESS,
    payload: data
  };
}

export function fetchFeaturedCollectionsError(error) {
  return {
    type: FEATURED_COLLECTIONS_FETCH_ERROR,
    payload: error
  };
}


export function fetchFeaturedCollectionPhotos(collectionId) {
    return function(dispatch) {
        dispatch({ type: FEATURED_COLLECTION_PHOTOS_FETCH_START, payload: collectionId });
        unsplash.collections.getCollectionPhotos(collectionId, 1, 10, 'latest')
            .then(toJson)
            .then(json => {
                dispatch(fetchFeaturedCollectionPhotosSuccess(collectionId, json));
        });
    }
}

export function fetchFeaturedCollectionPhotosSuccess(collectionId, json) {
    return {
      type: FEATURED_COLLECTION_PHOTOS_FETCH_SUCCESS,
      payload: { collectionId, json }
    };
  }
  
  export function fetchFeaturedCollectionPhotosError(error) {
    return {
      type: FEATURED_COLLECTION_PHOTOS_FETCH_ERROR,
      payload: error
    };
  }