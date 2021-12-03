/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-console */
import { Middleware } from 'redux';
import { isOfflineSetAC, isOfflineContentVisibleSetAC } from '../../state/offlineAC';
import { offlineComponentShowTimeout } from '../constants';

const offlineCheck: Middleware = (store) => (next) => (action) => {
  if (action.type === 'OFFLINE_CHECK') {
    let contentTimeout: ReturnType<typeof setTimeout>;
    const setOnline = () => {
      console.log(contentTimeout);
      console.log(clearTimeout(contentTimeout));
      // console.log(contentTimeout);
      window.addEventListener('offline', setOffline);
      window.removeEventListener('online', setOnline);
      store.dispatch(isOfflineContentVisibleSetAC(false));
      store.dispatch(isOfflineSetAC(false));
    };

    const setOffline = () => {
      console.log(contentTimeout);
      window.addEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
      store.dispatch(isOfflineSetAC(true));
      const contentVisibilityTimeoutFunc = () => {
        store.dispatch(isOfflineContentVisibleSetAC(true));
      };
      contentTimeout = setTimeout(contentVisibilityTimeoutFunc, offlineComponentShowTimeout);
      console.log(contentTimeout);
    };

    // window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);
  }
  return next(action);
};

export default offlineCheck;
