import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PageInfoBlock } from '../PageInfoBlock/PageInfoBlock';
import { CardHolder } from '../Cardholder/CardHolder';
import { StatsBlock } from '../StatsBlock/StatsBlock';
import { cards } from '../../cardData';
import {
  randomizerFunc,
  toArrayId,
  audioPlayFunc,
  gameMainFunction,
} from '../../functions/helperFunctions';
import { MainPageProps, MatchParams, WordCard } from '../../interfaces/interfaces';
import { PUBLIC_URL, correctAudioSrc, errorAudioSrc } from '../../constants/constants';
import './MainPage.scss';

export const MainPage: React.FC<MainPageProps> = ({
  isBlocking,
  isPlaying,
  isGameStarted,
  gameStartedToggle,
  resultScreenVisibilityToggle,
  getResult,
  setIsBlockingToggle,
}) => {
  const [answers, setAnswer] = useState<boolean[]>([]);
  const idParam = useParams<MatchParams>();

  const cardsArrS = useRef<WordCard[]>([]);
  const finalResult = useRef<string>('');
  const cardIndex = useRef<number>(0);
  const correctAnswers = useRef<number>(0);
  const answersCount = useRef<number>(0);

  const chancesGiven = 10; // количество ответов
  const maxCorrectAnswers = 8; // максимальное количество правильных ответов
  const maxPercent = 100;

  const clearAll = () => {
    setAnswer([]);
    cardsArrS.current = [];
    cardIndex.current = 0;
    answersCount.current = 0;
    finalResult.current = '';
    correctAnswers.current = 0;
  };

  const resultScreenShow = () => {
    finalResult.current = `${(maxPercent / maxCorrectAnswers) * correctAnswers.current}%`;
    getResult(finalResult.current);
    resultScreenVisibilityToggle();
    setIsBlockingToggle(false);
  };

  const gameStepsFunc = (EO?: React.MouseEvent) => {
    gameMainFunction(
      EO,
      cardsArrS,
      cardIndex,
      answersCount,
      chancesGiven,
      correctAnswers,
      maxCorrectAnswers,
      PUBLIC_URL,
      correctAudioSrc,
      errorAudioSrc,
      setAnswer,
      resultScreenShow
    );
  };

  const startGameFunc = () => {
    cardsArrS.current = cards[toArrayId(idParam.id)].slice().sort(randomizerFunc);
    if (cardsArrS) audioPlayFunc(PUBLIC_URL, cardsArrS.current[cardIndex.current].audioSrc);
  };

  const replayWord = () => {
    audioPlayFunc(PUBLIC_URL, cardsArrS.current[cardIndex.current].audioSrc);
  };

  const restartGameFunc = () => {
    clearAll();
    startGameFunc();
  };

  const newGameFunc = () => {
    clearAll();
    gameStartedToggle();
    startGameFunc();
    setIsBlockingToggle(true);
  };

  useEffect(() => {
    clearAll();
    setIsBlockingToggle(false);
    if (isGameStarted) gameStartedToggle();
  }, [idParam.id]);

  return (
    <div className="MainPage">
      <PageInfoBlock
        isGameStarted={isGameStarted}
        isPlaying={isPlaying}
        id={idParam.id}
        newGameFunc={newGameFunc}
        restartGameFunc={restartGameFunc}
        replayWord={replayWord}
      />
      <CardHolder
        isBlocking={isBlocking}
        isPlaying={isPlaying}
        id={idParam.id}
        isGameStarted={isGameStarted}
        gameStepsFunc={gameStepsFunc}
      />
      {isPlaying && (
        <StatsBlock
          answers={answers}
          isPlaying={isPlaying}
          isGameStarted={isGameStarted}
          id={idParam.id}
        />
      )}
    </div>
  );
};
