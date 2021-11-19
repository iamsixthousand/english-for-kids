import React, { useState, useEffect } from 'react';
import i18next from 'i18next';
import './NetworkIndicator.scss';
import data from '../../en.json';
import { offlineIndicatorTimeout } from '../../@core/constants';

interface NetworkIndicatorProps {
  isOffline: boolean;
}

export const NetworkIndicator: React.FC<NetworkIndicatorProps> = ({ isOffline }) => {
  const [language, setLanguage] = useState('en');
  const [indicatorView, setIndicatorView] = useState(false);

  const setAppLanguage = (lang: string) => {
    i18next.init({
      lng: lang,
      resources: data,
    });
    setLanguage(language);
  };

  const indicatorViewToggle = (flag: boolean) => {
    setIndicatorView(flag);
  };

  useEffect(() => {
    setAppLanguage('en');
  });

  useEffect(() => {
    if (isOffline) {
      setTimeout(() => indicatorViewToggle(true), offlineIndicatorTimeout);
    } else {
      indicatorViewToggle(false);
    }
  }, [isOffline]);

  return (
    <div className={`IndicatorContainer${indicatorView ? ' view' : ' hide'}`}>
      <div className="IndicatorText">
        <span>{i18next.t('offline')}</span>
      </div>
    </div>
  );
};
