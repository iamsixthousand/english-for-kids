import React, { useEffect, useState } from 'react';
import i18next from 'i18next';
import { PUBLIC_URL } from '../../@core/constants';
import resourceS from '../../en.json';
import './StatsBlock.scss';

export interface StatsBlockProps {
  isPlaying: boolean;
  isGameStarted: boolean;
  id: string;
  answers: boolean[];
}

export const StatsBlock: React.FC<StatsBlockProps> = ({ answers, isGameStarted, id }) => {
  const [innerWidth, setInnerWidth] = useState<number>(1600);
  const [language, setLanguage] = useState('en');
  const triggerWidth = 820; // changes stats block style at this point

  const setAppLanguage = (lang: string) => {
    i18next.init({
      lng: lang,
      resources: resourceS,
    });
    setLanguage(language);
  };

  function setWindowInnerWidth(): void {
    setInnerWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', setWindowInnerWidth, false);
    return () => window.removeEventListener('resize', setWindowInnerWidth, false);
  });

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    window.addEventListener('load', setWindowInnerWidth, false);
    return () => window.removeEventListener('resize', setWindowInnerWidth, false);
  });

  useEffect(() => {
    setAppLanguage('en');
  });

  return (
    <div className={`StatsBlockContainer${innerWidth <= triggerWidth ? ' mini' : ''}`}>
      {innerWidth > triggerWidth && (
        <div className={`StatsBlock${isGameStarted && id ? ' game' : ''}`}>
          <div className={`TextStatsBlock${isGameStarted && id ? ' game' : ''}`}>
            <span>{i18next.t('answers')}</span>
          </div>
          {isGameStarted &&
            answers.map((el, i) => {
              return (
                <div className="IconContainer" key={`key${i + 1}`}>
                  <img
                    className="Icon"
                    alt={`icon${i}`}
                    src={`${PUBLIC_URL}/img/${el === true ? 'correct.png' : 'wrong.png'}`}
                  />
                </div>
              );
            })}
        </div>
      )}
      {innerWidth <= triggerWidth && (
        <div className={`StatsBlock${isGameStarted && id ? ' game mini' : ''}`}>
          <div className={`TextStatsBlock${isGameStarted && id ? ' game' : ''}`}>
            <span>{i18next.t('correct')}</span>
          </div>
          <div className={`TextStatsBlock${isGameStarted && id ? ' game' : ''}`}>
            <span>{i18next.t('wrong')}</span>
          </div>
          {isGameStarted && (
            <div className={`NumberStats${isGameStarted && id ? ' game correct' : ''}`}>
              {answers.filter((el) => el === true).length}
            </div>
          )}
          {isGameStarted && (
            <div className={`NumberStats${isGameStarted && id ? ' game wrong' : ''}`}>
              {answers.filter((el) => el === false).length}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
