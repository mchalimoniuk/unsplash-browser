import { combineReducers } from 'redux';

import collectionsReducer from './collections_reducer';

const rootReducer = combineReducers({
  collections: collectionsReducer
});

export default rootReducer;
