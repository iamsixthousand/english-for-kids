import React from 'react';
import { useSelector } from 'react-redux';
import i18next from 'i18next';
import { AppState } from '../../@core/interfaces';
import './ResultScreen.scss';

interface ResultScreenProps {
  resultScreenVisibilityToggle: () => void;
  finalResult: number;
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
      <div className="ResultContainer">
        <span className="ResultText">{i18next.t('result')}</span>
        <span
          className={`ResultPercent${finalResult >= 50 ? ' good' : ' bad'}`}
        >{`${finalResult}%`}</span>
        <button className="ResultCloseButton" type="button" onClick={resultScreenVisibilityToggle}>
          {i18next.t('close')}
        </button>
      </div>
    </div>
  );
};
