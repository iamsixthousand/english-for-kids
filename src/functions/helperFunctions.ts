import React from 'react';
import { WordCard } from '../interfaces/interfaces';

type RandomizerFunc = () => number;
// eslint-disable-next-line no-unused-vars
type ToArrayId = (id: string) => number;
// eslint-disable-next-line no-unused-vars
type AudioFunc = (publicURL: string, src: string) => void;
// eslint-disable-next-line no-unused-vars
type SetAnswerFunc = (value: React.SetStateAction<boolean[]>) => void;

/* eslint-disable */
interface GameFunction {
  (
    EO: React.MouseEvent | undefined,
    cardsArray: React.MutableRefObject<WordCard[]>,
    cardIndex: React.MutableRefObject<number>,
    answersCount: React.MutableRefObject<number>,
    chancesGiven: number,
    correctAnswers: React.MutableRefObject<number>,
    maxCorrectAnswers: number,
    publicURL: string,
    correctAudioSrc: string,
    errorAudioSrc: string,
    setAnswerFunc: SetAnswerFunc,
    resultShowFunc: () => void
  ): void;
}
/* eslint-enable */

export const randomizerFunc: RandomizerFunc = () => Math.random() - 0.5;
// to randomize sort method
export const toArrayId: ToArrayId = (id: string) => Number(id) - 1;
// to give useParam id a number value and decrease by 1 to match an array index
export const audioPlayFunc: AudioFunc = (publicURL, src) => new Audio(`${publicURL}/${src}`).play();
// to play audio
/* eslint-disable no-param-reassign */
export const gameMainFunction: GameFunction = (
  EO,
  cardsArray,
  cardIndex,
  answersCount,
  chancesGiven,
  correctAnswers,
  maxCorrectAnswers,
  publicURL,
  correctAudioSrc,
  errorAudioSrc,
  setAnswerFunc,
  resultShowFunc
) => {
  if (
    cardsArray.current.length >= cardIndex.current + 1 &&
    answersCount.current < chancesGiven &&
    correctAnswers.current < maxCorrectAnswers
  ) {
    if (
      (EO?.target as HTMLDivElement).dataset.word === cardsArray.current[cardIndex.current].word
    ) {
      audioPlayFunc(publicURL, correctAudioSrc);
      correctAnswers.current += 1;
      setAnswerFunc((prevAnswers) => [...prevAnswers, true]);
      cardIndex.current += 1;
      answersCount.current += 1;
      if (
        cardsArray.current.length >= cardIndex.current + 1 &&
        answersCount.current < chancesGiven &&
        correctAnswers.current < maxCorrectAnswers
      ) {
        audioPlayFunc(publicURL, cardsArray.current[cardIndex.current].audioSrc);
      } else resultShowFunc();
    } else {
      audioPlayFunc(publicURL, errorAudioSrc);
      setAnswerFunc((prevAnswers) => [...prevAnswers, false]);
      answersCount.current += 1;
      if (
        cardsArray.current.length >= cardIndex.current + 1 &&
        answersCount.current < chancesGiven &&
        correctAnswers.current < maxCorrectAnswers
      ) {
        setTimeout(
          () => audioPlayFunc(publicURL, cardsArray.current[cardIndex.current].audioSrc),
          1000
        );
      } else resultShowFunc();
    }
  } else resultShowFunc();
};
// главная функция в игровом режиме
/* eslint-enable */
