import React, { useState, useEffect } from 'react';
import i18next from 'i18next';
import './NetworkIndicator.scss';
import data from '../../en.json';

interface NetworkIndicatorProps {
  viewNetworkStatus: boolean;
}

export const NetworkIndicator: React.FC<NetworkIndicatorProps> = ({ viewNetworkStatus }) => {
  const [language, setLanguage] = useState('en');

  const setAppLanguage = (lang: string) => {
    i18next.init({
      lng: lang,
      resources: data,
    });
    setLanguage(language);
  };

  useEffect(() => {
    setAppLanguage('en');
  });

  return (
    <div className={`IndicatorContainer${viewNetworkStatus ? ' view' : ' hide'}`}>
      <div className="IndicatorText">
        <span>{i18next.t('offline')}</span>
      </div>
    </div>
  );
};
