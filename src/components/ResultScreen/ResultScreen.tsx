import React from 'react';
import { ResultScreenProps } from '../../interfaces/interfaces';
import './ResultScreen.scss';

export const ResultScreen: React.FC<ResultScreenProps> = ({
  resultScreenVisibilityToggle,
  viewResultScreen,
  finalResult,
}) => {
  return (
    <div className={viewResultScreen ? 'ResultScreen view' : 'ResultScreen hide'}>
      <div className="ResultPercent">
        <h2>RESULT:</h2>
        <h1>{finalResult}</h1>
        <button type="button" onClick={resultScreenVisibilityToggle}>
          CLOSE
        </button>
      </div>
    </div>
  );
};

// add useEffect timeOut
