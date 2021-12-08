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
    expect(gameProcessReducer(initState, isPlayingAction)).toMatchObject(newState);
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
    expect(gameProcessReducer(initState, isGameStartedAction)).toMatchObject(newState);
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
    expect(gameProcessReducer(initState, isBlockingAction)).toMatchObject(newState);
    expect(gameProcessReducer(initState, isBlockingAction)).toStrictEqual(newState);
  });
  // *************************************************************************************
  it('should return a correct answers array with a boolean values', () => {
    const addAnswerActionTrue: GameProcessAction = {
      type: ADD_ANSWER,
      payload: true,
    };

    const addAnswerActionFalse: GameProcessAction = {
      type: ADD_ANSWER,
      payload: false,
    };

    const newStateFirst: GameProcessState = {
      isPlaying: false,
      isGameStarted: false,
      isBlocking: false,
      answers: [true],
      result: '',
    };

    const newStateSecond: GameProcessState = {
      isPlaying: false,
      isGameStarted: false,
      isBlocking: false,
      answers: [false],
      result: '',
    };

    expect(gameProcessReducer(initState, addAnswerActionTrue)).toMatchObject(newStateFirst);
    expect(gameProcessReducer(initState, addAnswerActionTrue)).toStrictEqual(newStateFirst);
    expect(gameProcessReducer(initState, addAnswerActionTrue).answers.length).toBe(1);
    expect(gameProcessReducer(initState, addAnswerActionTrue).answers[0]).toBe(true);
    expect(gameProcessReducer(initState, addAnswerActionFalse)).toMatchObject(newStateSecond);
    expect(gameProcessReducer(initState, addAnswerActionFalse)).toStrictEqual(newStateSecond);
    expect(gameProcessReducer(initState, addAnswerActionTrue).answers.length).toBe(1);
    expect(gameProcessReducer(initState, addAnswerActionFalse).answers[0]).toBe(false);
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

    expect(gameProcessReducer(state, clearAnswersAction)).toMatchObject(newState);
    expect(gameProcessReducer(state, clearAnswersAction)).toStrictEqual(newState);
    expect(gameProcessReducer(state, clearAnswersAction).answers.length).toBe(0);
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

    expect(gameProcessReducer(initState, setResultAction)).toMatchObject(newState);
    expect(gameProcessReducer(initState, setResultAction)).toStrictEqual(newState);
    expect(typeof gameProcessReducer(initState, setResultAction).result).toBe('string');
  });
});
