/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import i18next from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { networkIndicatorVisibilitySetAC } from '../../state/elementsVisibilityAC';
import './NetworkIndicator.scss';
import { offlineIndicatorShowTimeout } from '../../@core/constants';
import { AppState } from '../../@core/interfaces';

export const NetworkIndicator: React.FC = () => {
  const dispatch = useDispatch();
  const isOffline = useSelector((store: AppState) => store.offline.isOffline);
  const indicatorVisibility = useSelector(
    (store: AppState) => store.elementVisibility.indicatorVisibility
  );

  const indicatorViewToggle = (flag: boolean) => {
    dispatch(networkIndicatorVisibilitySetAC(flag));
  };

  useEffect(() => {
    let indicatorTimeout: NodeJS.Timeout;
    if (isOffline) {
      indicatorTimeout = setTimeout(() => indicatorViewToggle(true), offlineIndicatorShowTimeout);
    } else {
      indicatorViewToggle(false);
    }
    return () => clearTimeout(indicatorTimeout);
  }, [isOffline]);

  return (
    <div className={`IndicatorContainer${indicatorVisibility ? ' view' : ' hide'}`}>
      <div className="IndicatorText">
        <span>{i18next.t('offline')}</span>
      </div>
    </div>
  );
};
