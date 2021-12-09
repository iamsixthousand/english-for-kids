/* eslint-disable no-undef */
import offlineReducer, { OfflineAction } from './offlineReducer';
import { IS_OFFLINE, IS_OFFLINE_CONTENT_VISIBLE, FOR_OFFLINE_RELOAD } from './offlineAC';
import { OfflineState } from '../@core/interfaces';

let initState: OfflineState = {
  isOffline: false,
  offlineContentVisible: false,
  forReload: false,
};

describe('offlineReducer:', () => {
  beforeEach(() => {
    initState = {
      isOffline: false,
      offlineContentVisible: false,
      forReload: false,
    };
  });
  it('should return an object with a correct boolean isOffline property value true', () => {
    const isOfflineAction: OfflineAction = {
      type: IS_OFFLINE,
      payload: true,
    };
    const newState = {
      isOffline: true,
      offlineContentVisible: false,
      forReload: false,
    };
    expect(offlineReducer(initState, isOfflineAction)).toStrictEqual(newState);
  });
  // **********************************************************
  it('should return an object with a correct boolean offlineContentVisible property value true', () => {
    const offlineContentVisibleAction: OfflineAction = {
      type: IS_OFFLINE_CONTENT_VISIBLE,
      payload: true,
    };
    const newState = {
      isOffline: false,
      offlineContentVisible: true,
      forReload: false,
    };
    expect(offlineReducer(initState, offlineContentVisibleAction)).toStrictEqual(newState);
  });
  // **********************************************************
  it('should return an object with a correct boolean forReload property value true', () => {
    const forReloadAction: OfflineAction = {
      type: FOR_OFFLINE_RELOAD,
      payload: true,
    };
    const newState = {
      isOffline: false,
      offlineContentVisible: false,
      forReload: true,
    };
    expect(offlineReducer(initState, forReloadAction)).toStrictEqual(newState);
  });
});
