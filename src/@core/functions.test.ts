/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { toArrayId, calculateResult, gameMainFunction, audioPlayFunc } from './functions';
import {
  maxCorrectAnswers,
  maxPercent,
  chancesGiven,
  PUBLIC_URL,
  correctAudioSrc,
  errorAudioSrc,
} from './constants';
import { WordCard } from './interfaces';
import { cards } from '../cardData'; // cards array

describe('toArrayId function:', () => {
  it('should return a correct number value to match array index', () => {
    expect(toArrayId('4')).toBe(3);
    expect(toArrayId('true')).toBe(NaN);
  });
});

describe('calculateResult function:', () => {
  it('should return a correct sting percent value', () => {
    // each correct answer is 12.5 + %
    const correctAnswers = 5;
    expect(calculateResult(maxPercent, maxCorrectAnswers, correctAnswers)).toBe('62.5%');
  });
});

describe('gameMainFunction function:', () => {
  const mockResultShowFunc = jest.fn();
  const mockSetAnswerFunc = jest.fn();
  const mockAudioPlayFunc = jest.fn();

  const EO = {
    target: {
      dataset: {
        word: 'dance',
      },
    },
  } as unknown as React.MouseEvent | undefined;

  const publicURL = PUBLIC_URL;

  const cardsArray: React.MutableRefObject<WordCard[]> = {
    current: cards[0],
  };

  const cardIndex: React.MutableRefObject<number> = {
    current: 0,
  };

  const answersCount: React.MutableRefObject<number> = {
    current: 0,
  };

  const correctAnswers: React.MutableRefObject<number> = {
    current: 0,
  };

  const runGameMainFunc = () => {
    gameMainFunction(
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
      mockSetAnswerFunc,
      mockResultShowFunc,
      mockAudioPlayFunc
    );
  };

  // *****************************************************
  describe('if it is the last remaining answer should call', () => {
    beforeEach(() => {
      cardIndex.current = 7; // last index, we have 8 cards
      answersCount.current = 9; // should be the last answer, max count is 10
      correctAnswers.current = 7; // should be the last correct answer, max count is 8
    });

    it('mockSetAnswerFunc 1 time', () => {
      runGameMainFunc();
      expect(mockSetAnswerFunc.mock.calls.length).toBe(1);
    });
    it('mockResultShowFunc 1 time', () => {
      runGameMainFunc();
      expect(mockResultShowFunc.mock.calls.length).toBe(1);
    });
    it('mockAudioPlayFunc 1 time', () => {
      runGameMainFunc();
      expect(mockAudioPlayFunc.mock.calls.length).toBe(1);
    });
  });
  // ***********************************************************************
  describe('if it is right and NOT the last remaining answer should', () => {
    beforeEach(() => {
      cardIndex.current = 1; // index of 'dance' word in array
      answersCount.current = 8; // not the last answer
      correctAnswers.current = 2; // should not be the last correct answer
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('call mockSetAnswerFunc 1 time', () => {
      runGameMainFunc();
      expect(mockSetAnswerFunc.mock.calls.length).toBe(1);
    });

    it('call mockResultShowFunc 0 times', () => {
      runGameMainFunc();
      expect(mockResultShowFunc.mock.calls.length).toBe(0);
    });

    it('call mockAudioPlayFunc out of timeout 1 time', () => {
      runGameMainFunc();
      expect(mockAudioPlayFunc.mock.calls.length).toBe(1);
    });

    it('call timeout 1 time', () => {
      jest.useFakeTimers();
      jest.spyOn(global, 'setTimeout');
      runGameMainFunc();
      expect(setTimeout).toHaveBeenCalledTimes(1);
    });

    it('call mockAudioPlayFunc in timeout 1 time', () => {
      jest.useFakeTimers();
      jest.spyOn(global, 'setTimeout');
      runGameMainFunc();
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500);
    });

    it('increase answersCount.current value to 9', () => {
      runGameMainFunc();
      expect(answersCount.current).toBe(9);
    });
  });
});
