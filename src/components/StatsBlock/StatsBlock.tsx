import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import i18next from 'i18next';
import { PUBLIC_URL } from '../../@core/constants';
import { innerWidthSetAC } from '../../state/appConfigAC';
import { AppState } from '../../@core/interfaces';
import './StatsBlock.scss';

export interface StatsBlockProps {
  id: string;
}

export const StatsBlock: React.FC<StatsBlockProps> = ({ id }) => {
  const dispatch = useDispatch();
  const isGameStarted = useSelector((store: AppState) => store.gameProcess.isGameStarted);
  const innerWidth = useSelector((store: AppState) => store.appConfig.innerWidth);
  const answers = useSelector((store: AppState) => store.gameProcess.answers);
  const triggerWidth = 820; // changes stats block style at this point

  function setWindowInnerWidth(): void {
    dispatch(innerWidthSetAC(window.innerWidth));
  }

  useEffect(() => {
    window.addEventListener('resize', setWindowInnerWidth, false);
    return () => window.removeEventListener('resize', setWindowInnerWidth, false);
  });

  useEffect(() => {
    dispatch(innerWidthSetAC(window.innerWidth));
    window.addEventListener('load', setWindowInnerWidth, false);
    return () => window.removeEventListener('resize', setWindowInnerWidth, false);
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
