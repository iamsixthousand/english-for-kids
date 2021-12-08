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
  result: '',
};

describe('gameProcessReducer:', () => {
  beforeEach(() => {
    initState = {
      isPlaying: false,
      isGameStarted: false,
      isBlocking: false,
      answers: [], // waits for answer as boolean
      result: '',
    };
  });
  // **************************************************************************
  it('should return a correct isPlaying boolean value', () => {
    const isPlayingAction: GameProcessAction = {
      type: IS_PLAYING,
      payload: true,
    };
    const newState: GameProcessState = {
      isPlaying: true,
      isGameStarted: false,
      isBlocking: false,
      answers: [], // waits for answer as boolean
      result: '',
    };
    expect(gameProcessReducer(initState, isPlayingAction)).toStrictEqual(newState);
  });
  // *************************************************************************************
  it('should return a correct isGameStarted boolean value', () => {
    const isGameStartedAction: GameProcessAction = {
      type: IS_GAME_STARTED,
      payload: true,
    };
    const newState: GameProcessState = {
      isPlaying: false,
      isGameStarted: true,
      isBlocking: false,
      answers: [], // waits for answer as boolean
      result: '',
    };
    expect(gameProcessReducer(initState, isGameStartedAction)).toStrictEqual(newState);
  });
  // *************************************************************************************
  it('should return a correct isBlocking boolean value', () => {
    const isBlockingAction: GameProcessAction = {
      type: IS_BLOCKING,
      payload: true,
    };
    const newState: GameProcessState = {
      isPlaying: false,
      isGameStarted: false,
      isBlocking: true,
      answers: [], // waits for answer as boolean
      result: '',
    };
    expect(gameProcessReducer(initState, isBlockingAction)).toStrictEqual(newState);
  });
  // *************************************************************************************
  describe('should return a correct answers array with', () => {
    it('true boolean element', () => {
      const addAnswerActionTrue: GameProcessAction = {
        type: ADD_ANSWER,
        payload: true,
      };

      const newState: GameProcessState = {
        isPlaying: false,
        isGameStarted: false,
        isBlocking: false,
        answers: [true],
        result: '',
      };

      expect(gameProcessReducer(initState, addAnswerActionTrue)).toStrictEqual(newState);
    });
    it('false boolean element', () => {
      const addAnswerActionFalse: GameProcessAction = {
        type: ADD_ANSWER,
        payload: false,
      };

      const newState: GameProcessState = {
        isPlaying: false,
        isGameStarted: false,
        isBlocking: false,
        answers: [false],
        result: '',
      };

      expect(gameProcessReducer(initState, addAnswerActionFalse)).toStrictEqual(newState);
    });
  });

  // *************************************************************************************
  it('should return a correct answers array with no elements in it', () => {
    const clearAnswersAction: GameProcessAction = {
      type: CLEAR_ANSWERS,
      payload: [],
    };

    const state: GameProcessState = {
      isPlaying: false,
      isGameStarted: false,
      isBlocking: false,
      answers: [true, false, true, true],
      result: '',
    };

    const newState: GameProcessState = {
      isPlaying: false,
      isGameStarted: false,
      isBlocking: false,
      answers: [],
      result: '',
    };

    expect(gameProcessReducer(state, clearAnswersAction)).toStrictEqual(newState);
  });
  // *************************************************************************************
  it('should return a correct string result', () => {
    const setResultAction: GameProcessAction = {
      type: SET_RESULT,
      payload: '80%',
    };

    const newState: GameProcessState = {
      isPlaying: false,
      isGameStarted: false,
      isBlocking: false,
      answers: [],
      result: '80%',
    };

    expect(gameProcessReducer(initState, setResultAction)).toStrictEqual(newState);
  });
});
