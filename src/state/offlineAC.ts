export const IS_OFFLINE = 'IS_OFFLINE';
export const IS_OFFLINE_CONTENT_VISIBLE = 'IS_OFFLINE_CONTENT_VISIBLE';
export const FOR_OFFLINE_RELOAD = 'FOR_OFFLINE_RELOAD';

export type IsOfflineActionType = typeof IS_OFFLINE;
export type IsOfflineContentVisibleActionType = typeof IS_OFFLINE_CONTENT_VISIBLE;
export type ForOfflineReloadActionType = typeof FOR_OFFLINE_RELOAD;

interface IsOfflineSetAC {
  (isOffline: boolean): {
    type: IsOfflineActionType;
    payload: typeof isOffline;
  };
}

interface IsOfflineContentVisibleSetAC {
  (offlineContentVisible: boolean): {
    type: IsOfflineContentVisibleActionType;
    payload: typeof offlineContentVisible;
  };
}

interface ReloadOfflineAC {
  (forReload: boolean): {
    type: ForOfflineReloadActionType;
    payload: typeof forReload;
  };
}

export const isOfflineSetAC: IsOfflineSetAC = (isOffline) => {
  return {
    type: IS_OFFLINE,
    payload: isOffline,
  };
};

export const isOfflineContentVisibleSetAC: IsOfflineContentVisibleSetAC = (
  offlineContentVisible
) => {
  return {
    type: IS_OFFLINE_CONTENT_VISIBLE,
    payload: offlineContentVisible,
  };
};

export const reloadOfflineAC: ReloadOfflineAC = (forReload) => {
  return {
    type: FOR_OFFLINE_RELOAD,
    payload: forReload,
  };
};
