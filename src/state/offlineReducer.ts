import { IS_OFFLINE, IS_OFFLINE_CONTENT_VISIBLE, FOR_OFFLINE_RELOAD } from './offlineAC';
import { OfflineState } from '../@core/interfaces';

type isOfflineActionType = 'IS_OFFLINE';
type isOfflineContentVisibleActionType = 'IS_OFFLINE_CONTENT_VISIBLE';
type forOfflineReloadActionType = 'FOR_OFFLINE_RELOAD';

interface isOfflineAction {
  type: isOfflineActionType;
  isOffline: boolean;
}

interface isOfflineContentVisibleAction {
  type: isOfflineContentVisibleActionType;
  offlineContentVisible: boolean;
}

interface forOfflineReloadAction {
  type: forOfflineReloadActionType;
  forReload: boolean;
}

type OfflineAction = isOfflineAction | isOfflineContentVisibleAction | forOfflineReloadAction;

// interface OfflineAction {
//   type: string;
//   isOffline?: boolean;
//   offlineContentVisible?: boolean;
//   forReload?: boolean;
// }

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
        isOffline: action.isOffline,
      };
    }
    case IS_OFFLINE_CONTENT_VISIBLE: {
      return {
        ...state,
        offlineContentVisible: action.offlineContentVisible,
      };
    }
    case FOR_OFFLINE_RELOAD: {
      return {
        ...state,
        forReload: action.forReload,
      };
    }
    default:
      return state;
  }
}
