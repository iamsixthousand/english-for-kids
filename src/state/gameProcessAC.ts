/* eslint-disable object-shorthand */
export const IS_PLAYING = 'IS_PLAYING';
export const IS_GAME_STARTED = 'IS_GAME_STARTED';
export const IS_BLOCKING = 'IS_BLOCKING';
export const ADD_ANSWER = 'ADD_ANSWER';
export const CLEAR_ANSWERS = 'CLEAR_ANSWERS';
export const SET_RESULT = 'SET_RESULT';

interface IsPlayingSetAC {
  (isPlaying: boolean): {
    type: string;
    isPlaying: typeof isPlaying;
  };
}

interface IsGameStartedSetAC {
  (isGameStarted: boolean): {
    type: string;
    isGameStarted: typeof isGameStarted;
  };
}

interface IsBlockingSetAC {
  (isBlocking: boolean): {
    type: string;
    isBlocking: typeof isBlocking;
  };
}

interface AddAnswerAC {
  (answer: boolean): {
    type: string;
    answer: typeof answer;
  };
}

interface ClearAnswerAC {
  (arr: boolean[]): {
    type: string;
    arr: typeof arr;
  };
}

interface SetResultAC {
  (result: string): {
    type: string;
    result: typeof result;
  };
}

export const isPlayingSetAC: IsPlayingSetAC = (isPlaying) => {
  return {
    type: IS_PLAYING,
    isPlaying: isPlaying,
  };
};

export const isGameStartedSetAC: IsGameStartedSetAC = (isGameStarted) => {
  return {
    type: IS_GAME_STARTED,
    isGameStarted: isGameStarted,
  };
};

export const isBlockingSetAC: IsBlockingSetAC = (isBlocking) => {
  return {
    type: IS_BLOCKING,
    isBlocking: isBlocking,
  };
};

export const addAnswerAC: AddAnswerAC = (answer) => {
  return {
    type: ADD_ANSWER,
    answer: answer,
  };
};

export const clearAnswersAC: ClearAnswerAC = (arr) => {
  return {
    type: CLEAR_ANSWERS,
    arr: arr,
  };
};

export const setResultAC: SetResultAC = (result) => {
  return {
    type: SET_RESULT,
    result: result,
  };
};
