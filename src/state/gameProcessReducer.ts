import {
  IS_PLAYING,
  IS_GAME_STARTED,
  IS_BLOCKING,
  ADD_ANSWER,
  SET_RESULT,
  CLEAR_ANSWERS,
} from './gameProcessAC';
import { GameProcessState } from '../@core/interfaces';

type isPlayingActionType = 'IS_PLAYING';
type isGameStartedActionType = 'IS_GAME_STARTED';
type isBlockingActionType = 'IS_BLOCKING';
type addAnswerActionType = 'ADD_ANSWER';
type clearResultActionType = 'CLEAR_ANSWERS';
type setResultActionType = 'SET_RESULT';

interface isPlayingAction {
  type: isPlayingActionType;
  isPlaying: boolean;
}

interface isGameStartedAction {
  type: isGameStartedActionType;
  isGameStarted: boolean;
}

interface isBlockingAction {
  type: isBlockingActionType;
  isBlocking: boolean;
}

interface addAnswerAction {
  type: addAnswerActionType;
  answer: boolean;
}

interface clearResultAction {
  type: clearResultActionType;
  arr: boolean[];
}

interface setResultAction {
  type: setResultActionType;
  result: string;
}

type GameProcessAction =
  | isPlayingAction
  | isGameStartedAction
  | isBlockingAction
  | addAnswerAction
  | clearResultAction
  | setResultAction;

const initState: GameProcessState = {
  isPlaying: false,
  isGameStarted: false,
  isBlocking: false,
  answers: [], // waits for answer as boolean
  result: '',
};

export default function gameProcessReducer(
  state = initState,
  action: GameProcessAction
): GameProcessState {
  switch (action.type) {
    case IS_PLAYING: {
      return {
        ...state,
        isPlaying: action.isPlaying,
      };
    }
    case IS_GAME_STARTED: {
      return {
        ...state,
        isGameStarted: action.isGameStarted,
      };
    }
    case IS_BLOCKING: {
      return {
        ...state,
        isBlocking: action.isBlocking,
      };
    }
    case ADD_ANSWER: {
      const newAnswers = state.answers.slice();
      newAnswers.push(action.answer);
      return {
        ...state,
        answers: newAnswers,
      };
    }
    case CLEAR_ANSWERS: {
      return {
        ...state,
        answers: action.arr,
      };
    }
    case SET_RESULT: {
      return {
        ...state,
        result: action.result,
      };
    }
    default:
      return state;
  }
}
