// TODO: move result screen show func into @core/functions
import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PageInfoBlock } from '../PageInfoBlock/PageInfoBlock';
import { CardHolder } from '../Cardholder/CardHolder';
import { StatsBlock } from '../StatsBlock/StatsBlock';
import { cards } from '../../cardData';
import { clearAnswersAC, addAnswerAC } from '../../state/gameProcessAC';
import { randomizerFunc, toArrayId, audioPlayFunc, gameMainFunction } from '../../@core/functions';
import { GetResult, MatchParams, WordCard, AppState } from '../../@core/interfaces';
import {
  PUBLIC_URL,
  correctAudioSrc,
  errorAudioSrc,
  chancesGiven,
  maxCorrectAnswers,
  maxPercent,
} from '../../@core/constants';
import './MainPage.scss';

interface MainPageProps {
  gameStartedToggle: () => void;
  resultScreenVisibilityToggle: () => void;
  getResult: GetResult;
  // eslint-disable-next-line no-unused-vars
  setIsBlockingToggle: (arg: boolean) => void;
}

export const MainPage: React.FC<MainPageProps> = ({
  gameStartedToggle,
  resultScreenVisibilityToggle,
  getResult,
  setIsBlockingToggle,
}) => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((store: AppState) => store.gameProcess.isPlaying);
  const isGameStarted = useSelector((store: AppState) => store.gameProcess.isGameStarted);

  const idParam = useParams<MatchParams>();

  const cardsArrS = useRef<WordCard[]>([]);
  const finalResult = useRef<string>('');
  const cardIndex = useRef<number>(0);
  const correctAnswers = useRef<number>(0);
  const answersCount = useRef<number>(0);

  const setAnswer = (value: boolean) => dispatch(addAnswerAC(value));

  const clearAll = () => {
    dispatch(clearAnswersAC([]));
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
    if (cardsArrS) audioPlayFunc(PUBLIC_URL, cardsArrS.current[cardIndex.current].audioSrc, true);
  };

  const replayWord = () => {
    audioPlayFunc(PUBLIC_URL, cardsArrS.current[cardIndex.current].audioSrc, true);
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
        id={idParam.id}
        newGameFunc={newGameFunc}
        restartGameFunc={restartGameFunc}
        replayWord={replayWord}
      />
      <CardHolder id={idParam.id} gameStepsFunc={gameStepsFunc} />
      {isPlaying && <StatsBlock id={idParam.id} />}
    </div>
  );
};
