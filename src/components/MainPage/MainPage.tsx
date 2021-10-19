import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageInfoBlock } from '../PageInfoBlock/PageInfoBlock';
import { CardHolder } from '../Cardholder/CardHolder';
import { StatsBlock } from '../StatsBlock/StatsBlock';
import { cards } from '../../cardData';
import { randomizerFunc, toArrayId } from '../../functions/helperFunctions';
import { MainPageProps, MatchParams, WordCard } from '../../interfaces/interfaces';
import './MainPage.scss';

export const MainPage: React.FC<MainPageProps> = ({
  isPlaying,
  isGameStarted,
  gameStartedToggle,
}) => {
  const [answers, setAnswer] = useState<boolean[]>([]);
  const idParam = useParams<MatchParams>();
  const cardsArrS = useRef<WordCard[]>([]);
  const answersArrS = useRef<boolean[]>([]);
  const cardIndex = useRef<number>(0);
  const { PUBLIC_URL } = process.env;

  const resultScreenShow = () => {
    console.log('aaaaa');
  };

  const gameStepsFunc = (EO?: React.MouseEvent) => {
    if (EO) EO.stopPropagation();
    if ((EO?.target as HTMLDivElement).dataset.word === cardsArrS.current[cardIndex.current].word) {
      new Audio(`${PUBLIC_URL}/audio/correct.mp3`).play();
      answersArrS.current.push(true);
      setAnswer((prevAnswers) => [...prevAnswers, true]);
      cardIndex.current += 1;
      if (cardsArrS.current.length >= cardIndex.current + 1)
        new Audio(`${PUBLIC_URL}/${cardsArrS.current[cardIndex.current].audioSrc}`).play();
      else resultScreenShow();
    } else {
      new Audio(`${PUBLIC_URL}/audio/error.mp3`).play();
      answersArrS.current.push(false);
      setAnswer((prevAnswers) => [...prevAnswers, false]);
      setTimeout(() =>
        new Audio(`${PUBLIC_URL}/${cardsArrS.current[cardIndex.current].audioSrc}`).play()
      );
    }
  };

  const startGameFunc = () => {
    cardsArrS.current = cards[toArrayId(idParam.id)].slice().sort(randomizerFunc);
    if (cardsArrS)
      new Audio(`${PUBLIC_URL}/${cardsArrS.current[cardIndex.current].audioSrc}`).play();
  };

  const newGameFunc = () => {
    gameStartedToggle();
    answersArrS.current = [];
    cardsArrS.current = [];
    startGameFunc();
  };

  return (
    <div className="MainPage">
      <PageInfoBlock isPlaying={isPlaying} id={idParam.id} gameStartedToggle={newGameFunc} />
      <CardHolder
        isPlaying={isPlaying}
        id={idParam.id}
        isGameStarted={isGameStarted}
        gameStepsFunc={gameStepsFunc}
      />
      {isPlaying && (
        <StatsBlock
          answersArrS={answers}
          isPlaying={isPlaying}
          isGameStarted={isGameStarted}
          id={idParam.id}
        />
      )}
    </div>
  );
};
