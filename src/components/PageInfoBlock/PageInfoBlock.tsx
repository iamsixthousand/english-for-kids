import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import i18next from 'i18next';
import { AppState } from '../../@core/interfaces';
import './PageInfoBlock.scss';

interface PageInfoBlockProps {
  id: string;
  newGameFunc: () => void;
  restartGameFunc: () => void;
  replayWord: () => void;
}

export const PageInfoBlock: React.FC<PageInfoBlockProps> = ({
  id = undefined,
  newGameFunc,
  restartGameFunc,
  replayWord,
}) => {
  let textSeen: string;
  let otherText: string;
  const isPlaying = useSelector((store: AppState) => store.gameProcess.isPlaying);
  const isGameStarted = useSelector((store: AppState) => store.gameProcess.isGameStarted);
  const language = useSelector((store: AppState) => store.appConfig.language);

  useEffect(() => {
    if (isPlaying) {
      window.scrollTo(0, 0);
    }
  }, [isPlaying]);

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
        <div className="InteractiveBox">{!id && <h1>{language && i18next.t('hello')}</h1>}</div>
        <div className="InteractiveBox mini">
          {!id && <h2>{language && i18next.t('chooseCategory')}</h2>}
        </div>
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
          {language && i18next.t('start!')}
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
