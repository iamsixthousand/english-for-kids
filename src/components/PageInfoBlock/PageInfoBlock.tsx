import React, { useEffect, useState } from 'react';
import i18next from 'i18next';
import './PageInfoBlock.scss';
// import * as resoureS from '../../en.json';

interface PageInfoBlockProps {
  isPlaying: boolean;
  id: string;
  newGameFunc: () => void;
  isGameStarted: boolean;
  restartGameFunc: () => void;
  replayWord: () => void;
}

export const PageInfoBlock: React.FC<PageInfoBlockProps> = ({
  isGameStarted,
  isPlaying,
  id = undefined,
  newGameFunc,
  restartGameFunc,
  replayWord,
}) => {
  let textSeen: string;
  let otherText: string;
  const [language, setLanguage] = useState('en');

  const setAppLanguage = (lang: string) => {
    i18next.init({
      lng: lang,
      resources: require('../../en.json'), // eslint-disable-line global-require
    });
    setLanguage(language);
  };

  useEffect(() => {
    if (isPlaying) {
      window.scrollTo(0, 0);
    }
  }, [isPlaying]);

  useEffect(() => {
    setAppLanguage('en');
  });

  switch (id) {
    case '1':
      textSeen = 'Action (Set A)';
      break;
    case '2':
      textSeen = 'Action (Set B)';
      break;
    case '3':
      textSeen = 'Animal (Set A)';
      break;
    case '4':
      textSeen = 'Animal (Set B)';
      break;
    case '5':
      textSeen = 'Clothes';
      break;
    case '6':
      textSeen = 'Emotions';
      break;
    default:
      textSeen = '';
      break;
  }

  switch (isPlaying) {
    case true:
      otherText = 'Now show your skills!';
      break;
    default:
      otherText = 'Feel free to practice!';
  }

  return (
    <div className="InteractiveBlock">
      <div>
        <div className="InteractiveBox">{!id && <h1>{i18next.t('hello')}</h1>}</div>
        <div className="InteractiveBox mini">{!id && <h2>{i18next.t('chooseCategory')}</h2>}</div>
        <div className={`InteractiveBox${id ? '' : ' mini'}`}>
          <h1>{id && `${textSeen} category. ${otherText}`}</h1>
        </div>
      </div>
      <div className={`ButtonContainer${isPlaying && id && !isGameStarted ? ' show' : ''}`}>
        <button
          type="button"
          className={`StartGameButton${isGameStarted || !isPlaying ? ' hide' : ''}`}
          onClick={newGameFunc}
        >
          {i18next.t('start!')}
        </button>
      </div>
      <div className={`inGameButtonsContainer${id && isGameStarted ? ' show' : ''}`}>
        <button
          type="button"
          className={`RestartGameButton${isGameStarted ? '' : ' hide'}`}
          onClick={restartGameFunc}
        >
          {i18next.t('restart')}
        </button>
        <button
          type="button"
          className={`ReplayButton${isGameStarted ? '' : ' hide'}`}
          onClick={replayWord}
        >
          {i18next.t('replay')}
        </button>
      </div>
    </div>
  );
};
