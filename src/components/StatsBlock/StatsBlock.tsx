import React from 'react';
import { StatsBlockProps } from '../../interfaces/interfaces';
import './StatsBlock.scss';

export const StatsBlock: React.FC<StatsBlockProps> = ({ answersArrS, isGameStarted, id }) => {
  const { PUBLIC_URL } = process.env;

  return (
    <div className={isGameStarted && id ? 'StatsBlock game' : 'StatsBlock'}>
      <div className={isGameStarted && id ? 'TextStatsBlock game' : 'TextStatsBlock'}>
        <span>ANSWERS:</span>
      </div>
      {answersArrS.map((el, i) => {
        return (
          <div className="IconContainer">
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
