/* eslint-disable object-shorthand */
export const IS_PLAYING = 'IS_PLAYING';
export const IS_GAME_STARTED = 'IS_GAME_STARTED';
export const IS_BLOCKING = 'IS_BLOCKING';
export const ADD_ANSWER = 'ADD_ANSWER';
export const CLEAR_ANSWERS = 'CLEAR_ANSWERS';
export const SET_RESULT = 'SET_RESULT';

export type IsPlayingActionType = typeof IS_PLAYING;
export type IsGameStartedActionType = typeof IS_GAME_STARTED;
export type IsBlockingActionType = typeof IS_BLOCKING;
export type AddAnswerActionType = typeof ADD_ANSWER;
export type ClearAnswersActionType = typeof CLEAR_ANSWERS;
export type SetResultActionType = typeof SET_RESULT;

interface IsPlayingSetAC {
  (isPlaying: boolean): {
    type: IsPlayingActionType;
    payload: typeof isPlaying;
  };
}

interface IsGameStartedSetAC {
  (isGameStarted: boolean): {
    type: IsGameStartedActionType;
    payload: typeof isGameStarted;
  };
}

interface IsBlockingSetAC {
  (isBlocking: boolean): {
    type: IsBlockingActionType;
    payload: typeof isBlocking;
  };
}

interface AddAnswerAC {
  (answer: boolean): {
    type: AddAnswerActionType;
    payload: typeof answer;
  };
}

interface ClearAnswersAC {
  (arr: boolean[]): {
    type: ClearAnswersActionType;
    payload: typeof arr;
  };
}

interface SetResultAC {
  (result: string): {
    type: SetResultActionType;
    payload: typeof result;
  };
}

export const isPlayingSetAC: IsPlayingSetAC = (isPlaying) => {
  return {
    type: IS_PLAYING,
    payload: isPlaying,
  };
};

export const isGameStartedSetAC: IsGameStartedSetAC = (isGameStarted) => {
  return {
    type: IS_GAME_STARTED,
    payload: isGameStarted,
  };
};

export const isBlockingSetAC: IsBlockingSetAC = (isBlocking) => {
  return {
    type: IS_BLOCKING,
    payload: isBlocking,
  };
};

export const addAnswerAC: AddAnswerAC = (answer) => {
  return {
    type: ADD_ANSWER,
    payload: answer,
  };
};

export const clearAnswersAC: ClearAnswersAC = (arr) => {
  return {
    type: CLEAR_ANSWERS,
    payload: arr,
  };
};

export const setResultAC: SetResultAC = (result) => {
  return {
    type: SET_RESULT,
    payload: result,
  };
};
