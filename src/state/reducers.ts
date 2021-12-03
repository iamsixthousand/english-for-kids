import { combineReducers } from 'redux';

import appConfigReducer from './appConfigReducer';
import elementsVisibilityReducer from './elementsVisibilityReducer';
import gameProcessReducer from './gameProcessReducer';
import offlineReducer from './offlineReducer';

const combinedReducer = combineReducers({
  appConfig: appConfigReducer,
  elementVisibility: elementsVisibilityReducer,
  gameProcess: gameProcessReducer,
  offline: offlineReducer,
});

export default combinedReducer;
