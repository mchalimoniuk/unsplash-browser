import { combineReducers } from 'redux';

import collectionsReducer from './collections_reducer';
import photosReducer from './photos_reducer';


const rootReducer = combineReducers({
  collections: collectionsReducer,
  photos: photosReducer
});

export default rootReducer;
