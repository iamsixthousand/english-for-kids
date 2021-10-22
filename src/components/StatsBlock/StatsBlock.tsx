import React, { useEffect, useState } from 'react';
import { StatsBlockProps } from '../../interfaces/interfaces';
import { PUBLIC_URL } from '../../constants/constants';
import './StatsBlock.scss';

export const StatsBlock: React.FC<StatsBlockProps> = ({ answers, isGameStarted, id }) => {
  // const innerWidth = useRef<number>(window.innerWidth);
  const [innerWidth, setInnerWidth] = useState<number>(1600);

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

  return (
    <div className="StatsBlockContainer">
      {innerWidth > 650 && (
        <div className={isGameStarted && id ? 'StatsBlock game' : 'StatsBlock'}>
          <div className={isGameStarted && id ? 'TextStatsBlock game' : 'TextStatsBlock'}>
            <span>ANSWERS:</span>
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
      {innerWidth <= 650 && (
        <div className={isGameStarted && id ? 'StatsBlock game mini' : 'StatsBlock'}>
          <div className={isGameStarted && id ? 'TextStatsBlock game' : 'TextStatsBlock'}>
            <span>CORRECT:</span>
          </div>
          <div className={isGameStarted && id ? 'TextStatsBlock game' : 'TextStatsBlock'}>
            <span>WRONG:</span>
          </div>
          {isGameStarted && (
            <div className={isGameStarted && id ? 'NumberStats game correct' : 'NumberStats'}>
              {answers.filter((el) => el === true).length}
            </div>
          )}
          {isGameStarted && (
            <div className={isGameStarted && id ? 'NumberStats game wrong' : 'NumberStats'}>
              {answers.filter((el) => el === false).length}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
