import React from 'react';
import { StatsBlockProps } from '../../interfaces/interfaces';
import './StatsBlock.scss';

export const StatsBlock: React.FC<StatsBlockProps> = ({ answers, isGameStarted, id }) => {
  const { PUBLIC_URL } = process.env;

  return (
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
  );
};
