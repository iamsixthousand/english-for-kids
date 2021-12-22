/* eslint-disable no-undef */
import gameProcessReducer, { GameProcessAction } from './gameProcessReducer';
import { GameProcessState } from '../@core/interfaces';
import {
  IS_PLAYING,
  IS_GAME_STARTED,
  IS_BLOCKING,
  ADD_ANSWER,
  CLEAR_ANSWERS,
  SET_RESULT,
} from './gameProcessAC';

let initState: GameProcessState = {
  isPlaying: false,
  isGameStarted: false,
  isBlocking: false,
  answers: [], // waits for answer as boolean
  result: 0,
};

describe('gameProcessReducer:', () => {
  beforeEach(() => {
    initState = {
      isPlaying: false,
      isGameStarted: false,
      isBlocking: false,
      answers: [], // waits for answer as boolean
      result: 0,
    };
  });
  // **************************************************************************
  it('should return an object with a correct isPlaying boolean value true', () => {
    const isPlayingAction: GameProcessAction = {
      type: IS_PLAYING,
      payload: true,
    };
    const newState: GameProcessState = {
      isPlaying: true,
      isGameStarted: false,
      isBlocking: false,
      answers: [], // waits for answer as boolean
      result: 0,
    };
    expect(gameProcessReducer(initState, isPlayingAction)).toStrictEqual(newState);
  });
  // *************************************************************************************
  it('should return an object with a correct isGameStarted boolean value true', () => {
    const isGameStartedAction: GameProcessAction = {
      type: IS_GAME_STARTED,
      payload: true,
    };
    const newState: GameProcessState = {
      isPlaying: false,
      isGameStarted: true,
      isBlocking: false,
      answers: [], // waits for answer as boolean
      result: 0,
    };
    expect(gameProcessReducer(initState, isGameStartedAction)).toStrictEqual(newState);
  });
  // *************************************************************************************
  it('should return an object with a correct isBlocking boolean value true', () => {
    const isBlockingAction: GameProcessAction = {
      type: IS_BLOCKING,
      payload: true,
    };
    const newState: GameProcessState = {
      isPlaying: false,
      isGameStarted: false,
      isBlocking: true,
      answers: [], // waits for answer as boolean
      result: 0,
    };
    expect(gameProcessReducer(initState, isBlockingAction)).toStrictEqual(newState);
  });
  // *************************************************************************************
  describe('should return an object with a correct answers array which has a single', () => {
    it('boolean element true', () => {
      const addAnswerActionTrue: GameProcessAction = {
        type: ADD_ANSWER,
        payload: true,
      };

      const newState: GameProcessState = {
        isPlaying: false,
        isGameStarted: false,
        isBlocking: false,
        answers: [true],
        result: 0,
      };

      expect(gameProcessReducer(initState, addAnswerActionTrue)).toStrictEqual(newState);
    });
    it('boolean element false', () => {
      const addAnswerActionFalse: GameProcessAction = {
        type: ADD_ANSWER,
        payload: false,
      };

      const newState: GameProcessState = {
        isPlaying: false,
        isGameStarted: false,
        isBlocking: false,
        answers: [false],
        result: 0,
      };

      expect(gameProcessReducer(initState, addAnswerActionFalse)).toStrictEqual(newState);
    });
  });
  // *************************************************************************************
  it('should return an object with a correct answers array which has no elements in it', () => {
    const clearAnswersAction: GameProcessAction = {
      type: CLEAR_ANSWERS,
      payload: [],
    };

    const state: GameProcessState = {
      isPlaying: false,
      isGameStarted: false,
      isBlocking: false,
      answers: [true, false, true, true],
      result: 0,
    };

    const newState: GameProcessState = {
      isPlaying: false,
      isGameStarted: false,
      isBlocking: false,
      answers: [],
      result: 0,
    };

    expect(gameProcessReducer(state, clearAnswersAction)).toStrictEqual(newState);
  });
  // *************************************************************************************
  it('should return an object with a correct string value of result property', () => {
    const setResultAction: GameProcessAction = {
      type: SET_RESULT,
      payload: 80,
    };

    const newState: GameProcessState = {
      isPlaying: false,
      isGameStarted: false,
      isBlocking: false,
      answers: [],
      result: 80,
    };

    expect(gameProcessReducer(initState, setResultAction)).toStrictEqual(newState);
  });
});
