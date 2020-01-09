import bookmarkReducer from './bookmark';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    bookmark:bookmarkReducer,
  
})

export default allReducers