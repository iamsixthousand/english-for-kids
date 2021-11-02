import React, { useState, useEffect } from 'react';
import i18next from 'i18next';
import './ResultScreen.scss';
import data from '../../en.json';

interface ResultScreenProps {
  resultScreenVisibilityToggle: () => void;
  viewResultScreen: boolean;
  finalResult: string;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  resultScreenVisibilityToggle,
  viewResultScreen,
  finalResult,
}) => {
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
    <div className={`ResultScreen${viewResultScreen ? ' view' : ' hide'}`}>
      <div className="ResultPercent">
        <h2>{i18next.t('result')}</h2>
        <h1>{finalResult}</h1>
        <button type="button" onClick={resultScreenVisibilityToggle}>
          {i18next.t('close')}
        </button>
      </div>
    </div>
  );
};
