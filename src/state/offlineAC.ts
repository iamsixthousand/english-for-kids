/* eslint-disable object-shorthand */
export const IS_OFFLINE = 'IS_OFFLINE';
export const IS_OFFLINE_CONTENT_VISIBLE = 'IS_OFFLINE_CONTENT_VISIBLE';
export const FOR_OFFLINE_RELOAD = 'FOR_OFFLINE_RELOAD';

interface IsOfflineSetAC {
  (isOffline: boolean): {
    type: string;
    isOffline: typeof isOffline;
  };
}

interface IsOfflineContentVisibleSetAC {
  (offlineContentVisible: boolean): {
    type: string;
    offlineContentVisible: typeof offlineContentVisible;
  };
}

interface ReloadOfflineAC {
  (forReload: boolean): {
    type: string;
    forReload: typeof forReload;
  };
}

export const isOfflineSetAC: IsOfflineSetAC = (isOffline) => {
  return {
    type: IS_OFFLINE,
    isOffline: isOffline,
  };
};

export const isOfflineContentVisibleSetAC: IsOfflineContentVisibleSetAC = (
  offlineContentVisible
) => {
  return {
    type: IS_OFFLINE_CONTENT_VISIBLE,
    offlineContentVisible: offlineContentVisible,
  };
};

export const reloadOfflineAC: ReloadOfflineAC = (forReload) => {
  return {
    type: FOR_OFFLINE_RELOAD,
    forReload: forReload,
  };
};
