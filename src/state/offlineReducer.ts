import {
  IS_OFFLINE,
  IS_OFFLINE_CONTENT_VISIBLE,
  FOR_OFFLINE_RELOAD,
  IsOfflineActionType,
  IsOfflineContentVisibleActionType,
  ForOfflineReloadActionType,
} from './offlineAC';
import { OfflineState } from '../@core/interfaces';

interface IsOfflineAction {
  type: IsOfflineActionType;
  payload: boolean;
}

interface IsOfflineContentVisibleAction {
  type: IsOfflineContentVisibleActionType;
  payload: boolean;
}

interface ForOfflineReloadAction {
  type: ForOfflineReloadActionType;
  payload: boolean;
}

type OfflineAction = IsOfflineAction | IsOfflineContentVisibleAction | ForOfflineReloadAction;

const initState: OfflineState = {
  isOffline: false,
  offlineContentVisible: false,
  forReload: false,
};

export default function offlineReducer(state = initState, action: OfflineAction): OfflineState {
  switch (action.type) {
    case IS_OFFLINE: {
      return {
        ...state,
        isOffline: action.payload,
      };
    }
    case IS_OFFLINE_CONTENT_VISIBLE: {
      return {
        ...state,
        offlineContentVisible: action.payload,
      };
    }
    case FOR_OFFLINE_RELOAD: {
      return {
        ...state,
        forReload: action.payload,
      };
    }
    default:
      return state;
  }
}
