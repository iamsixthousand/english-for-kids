import { Action, Dispatch } from 'redux';
import { isOfflineSetAC, isOfflineContentVisibleSetAC } from '../../state/offlineAC';

const offlineCheck = (dispatch: Dispatch<Action>) => (): void => {
  const setOnline = () => {
    window.removeEventListener('online', setOnline);
    dispatch(isOfflineSetAC(false));
    dispatch(isOfflineContentVisibleSetAC(false));
  };

  const setOffline = () => {
    window.removeEventListener('offline', setOffline);
    dispatch(isOfflineSetAC(true));
  };

  window.addEventListener('online', setOnline);
  window.addEventListener('offline', setOffline);
};

export default offlineCheck;
