import React from 'react';
import { useSelector } from 'react-redux';
import i18next from 'i18next';
import './ResultScreen.scss';
import { AppState } from '../../@core/interfaces';

interface ResultScreenProps {
  resultScreenVisibilityToggle: () => void;
  finalResult: string;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  resultScreenVisibilityToggle,
  finalResult,
}) => {
  const resultScreenVisible = useSelector(
    (store: AppState) => store.elementVisibility.resultScreenVisible
  );

  return (
    <div className={`ResultScreen${resultScreenVisible ? ' view' : ' hide'}`}>
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
