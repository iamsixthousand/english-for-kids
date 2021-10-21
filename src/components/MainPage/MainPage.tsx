import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PageInfoBlock } from '../PageInfoBlock/PageInfoBlock';
import { CardHolder } from '../Cardholder/CardHolder';
import { StatsBlock } from '../StatsBlock/StatsBlock';
import { cards } from '../../cardData';
import { randomizerFunc, toArrayId } from '../../functions/helperFunctions';
import { MainPageProps, MatchParams, WordCard } from '../../interfaces/interfaces';
import { PUBLIC_URL } from '../../constants/constants';
import './MainPage.scss';

export const MainPage: React.FC<MainPageProps> = ({
  isPlaying,
  isGameStarted,
  gameStartedToggle,
  resultScreenVisibilityToggle,
  getResult,
}) => {
  const [answers, setAnswer] = useState<boolean[]>([]);
  const [isBlocking, setIsBlocking] = useState<boolean>(false);
  const idParam = useParams<MatchParams>();

  const cardsArrS = useRef<WordCard[]>([]);
  const finalResult = useRef<string>('');
  const cardIndex = useRef<number>(0);
  const correctAnswers = useRef<number>(0);
  const answersCount = useRef<number>(0);

  const chancesGiven = 10; // количество ответов
  const maxCorrectAnswers = 8; // максимальное количество правильных ответов
  const maxPercent = 100;

  const resultScreenShow = () => {
    finalResult.current = `${(maxPercent / maxCorrectAnswers) * correctAnswers.current}%`;
    getResult(finalResult.current);
    resultScreenVisibilityToggle();
  };

  const gameStepsFunc = (EO?: React.MouseEvent) => {
    if (
      cardsArrS.current.length >= cardIndex.current + 1 &&
      answersCount.current < chancesGiven &&
      correctAnswers.current < maxCorrectAnswers
    ) {
      if (
        (EO?.target as HTMLDivElement).dataset.word === cardsArrS.current[cardIndex.current].word
      ) {
        new Audio(`${PUBLIC_URL}/audio/correct.mp3`).play();
        correctAnswers.current += 1;
        setAnswer((prevAnswers) => [...prevAnswers, true]);
        cardIndex.current += 1;
        answersCount.current += 1;
        if (
          cardsArrS.current.length >= cardIndex.current + 1 &&
          answersCount.current < chancesGiven &&
          correctAnswers.current < maxCorrectAnswers
        ) {
          new Audio(`${PUBLIC_URL}/${cardsArrS.current[cardIndex.current].audioSrc}`).play();
        } else resultScreenShow();
      } else {
        new Audio(`${PUBLIC_URL}/audio/error.mp3`).play();
        setAnswer((prevAnswers) => [...prevAnswers, false]);
        answersCount.current += 1;
        if (
          cardsArrS.current.length >= cardIndex.current + 1 &&
          answersCount.current < chancesGiven &&
          correctAnswers.current < maxCorrectAnswers
        ) {
          setTimeout(
            () =>
              new Audio(`${PUBLIC_URL}/${cardsArrS.current[cardIndex.current].audioSrc}`).play(),
            1000
          );
        } else resultScreenShow();
      }
    } else {
      resultScreenShow();
    }
  };

  const startGameFunc = () => {
    cardsArrS.current = cards[toArrayId(idParam.id)].slice().sort(randomizerFunc);
    if (cardsArrS)
      new Audio(`${PUBLIC_URL}/${cardsArrS.current[cardIndex.current].audioSrc}`).play();
  };

  const clearAll = () => {
    setAnswer([]);
    cardsArrS.current = [];
    cardIndex.current = 0;
    answersCount.current = 0;
    finalResult.current = '';
    correctAnswers.current = 0;
    setIsBlocking(false);
  };

  const replayWord = () => {
    new Audio(`${PUBLIC_URL}/${cardsArrS.current[cardIndex.current].audioSrc}`).play();
  };

  const restartGameFunc = () => {
    clearAll();
    startGameFunc();
  };

  const newGameFunc = () => {
    clearAll();
    gameStartedToggle();
    startGameFunc();
    setIsBlocking(true);
  };

  useEffect(() => {
    clearAll();
    if (isGameStarted) gameStartedToggle();
  }, [idParam.id]);

  const setIsBlockingToggle = () => setIsBlocking(!isBlocking);

  return (
    <div className="MainPage">
      <PageInfoBlock
        isGameStarted={isGameStarted}
        isPlaying={isPlaying}
        id={idParam.id}
        newGameFunc={newGameFunc}
        restartGameFunc={restartGameFunc}
        replayWord={replayWord}
        setIsBlockingToggle={setIsBlockingToggle}
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
