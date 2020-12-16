import listingsReducer from './listing';
import notificationReducer from './notification';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    listingsReducer,
    notificationReducer
});

export default reducers;