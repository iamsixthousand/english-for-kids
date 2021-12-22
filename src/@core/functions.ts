/* eslint-disable no-unused-vars */
import { WordCard } from './interfaces';

type RandomizerFunc = () => number;
type ToArrayId = (id: string) => number;
type AudioFunc = (publicURL: string, src: string, mode: boolean) => void;
type SetAnswerFunc = (value: boolean) => void;

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
    resultShowFunc: () => void,
    audioPlayFunc: AudioFunc
  ): void;
}
/* eslint-enable */

export const randomizerFunc: RandomizerFunc = () => Math.random() - 0.5;
// to randomize sort method
export const toArrayId: ToArrayId = (id: string) => Number(id) - 1;
// to give useParam id a number value and decrease by 1 to match an array index

/* eslint-disable no-param-reassign */
const initSound = new Audio();

export const audioPlayFunc: AudioFunc = (publicURL, src, mode, sound = initSound) => {
  sound.src = `${publicURL}/${src}`;
  sound.onloadeddata = () => {
    let isPlaying: boolean;
    sound.onplaying = () => {
      isPlaying = true;
    };
    sound.onpause = () => {
      isPlaying = false;
    };
    const playSound = () => {
      if (sound.paused && !isPlaying) {
        sound.play();
      }
    };
    const pauseSound = () => {
      if (!sound.paused && isPlaying) {
        sound.pause();
        sound.currentTime = 0;
      }
    };
    if (mode) {
      pauseSound();
      playSound();
    } else {
      pauseSound();
    }
  };
};
/* eslint-enable no-param-reassign */
let timeOutAudio = false; // flag shows that we have a timed out audio
// to play audio
/* eslint-disable no-param-reassign */
// main gameplay
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
  resultShowFunc,
  // eslint-disable-next-line no-shadow
  audioPlayFunc
) => {
  if (
    cardsArray.current.length >= cardIndex.current + 1 &&
    answersCount.current < chancesGiven &&
    correctAnswers.current < maxCorrectAnswers
  ) {
    if (
      (EO?.target as HTMLDivElement).dataset.word === cardsArray.current[cardIndex.current].word
    ) {
      timeOutAudio = false;
      audioPlayFunc(publicURL, correctAudioSrc, true);
      correctAnswers.current += 1;
      setAnswerFunc(true);
      cardIndex.current += 1;
      answersCount.current += 1;
      if (
        cardsArray.current.length >= cardIndex.current + 1 &&
        answersCount.current < chancesGiven &&
        correctAnswers.current < maxCorrectAnswers
      ) {
        timeOutAudio = true;
        const audioTimeout = setTimeout(() => {
          audioPlayFunc(publicURL, cardsArray.current[cardIndex.current].audioSrc, true);
          timeOutAudio = false;
          clearTimeout(audioTimeout);
        }, 500);
      } else resultShowFunc();
    } else {
      audioPlayFunc(publicURL, errorAudioSrc, true);
      setAnswerFunc(false);
      answersCount.current += 1;
      if (
        cardsArray.current.length >= cardIndex.current + 1 &&
        answersCount.current < chancesGiven &&
        correctAnswers.current < maxCorrectAnswers
      ) {
        if (!timeOutAudio) {
          timeOutAudio = true;
          const audioTimeout = setTimeout(() => {
            audioPlayFunc(publicURL, cardsArray.current[cardIndex.current].audioSrc, true);
            timeOutAudio = false;
            clearTimeout(audioTimeout);
          }, 500);
        }
      } else resultShowFunc();
    }
  } else resultShowFunc();
};
/* eslint-enable */

/* eslint-disable */
interface CalculateResultFunc {
  (maxPercent: number, maxCorrectAnswers: number, correctAnswers: number): number;
}
/* eslint-enable */

export const calculateResult: CalculateResultFunc = (
  maxPercent,
  maxCorrectAnswers,
  correctAnswers
) => {
  return (maxPercent / maxCorrectAnswers) * correctAnswers;
};
// calculates final result
