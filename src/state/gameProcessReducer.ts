import {
  IS_PLAYING,
  IS_GAME_STARTED,
  IS_BLOCKING,
  ADD_ANSWER,
  SET_RESULT,
  CLEAR_ANSWERS,
  IsPlayingActionType,
  IsGameStartedActionType,
  IsBlockingActionType,
  AddAnswerActionType,
  ClearAnswersActionType,
  SetResultActionType,
} from './gameProcessAC';
import { GameProcessState } from '../@core/interfaces';

interface IsPlayingAction {
  type: IsPlayingActionType;
  payload: boolean;
}

interface IsGameStartedAction {
  type: IsGameStartedActionType;
  payload: boolean;
}

interface IsBlockingAction {
  type: IsBlockingActionType;
  payload: boolean;
}

interface AddAnswerAction {
  type: AddAnswerActionType;
  payload: boolean;
}

interface ClearAnswersAction {
  type: ClearAnswersActionType;
  payload: boolean[];
}

interface SetResultAction {
  type: SetResultActionType;
  payload: string;
}

export type GameProcessAction =
  | IsPlayingAction
  | IsGameStartedAction
  | IsBlockingAction
  | AddAnswerAction
  | ClearAnswersAction
  | SetResultAction;

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
        isPlaying: action.payload,
      };
    }
    case IS_GAME_STARTED: {
      return {
        ...state,
        isGameStarted: action.payload,
      };
    }
    case IS_BLOCKING: {
      return {
        ...state,
        isBlocking: action.payload,
      };
    }
    case ADD_ANSWER: {
      const newAnswers = state.answers.slice();
      newAnswers.push(action.payload);
      return {
        ...state,
        answers: newAnswers,
      };
    }
    case CLEAR_ANSWERS: {
      return {
        ...state,
        answers: action.payload,
      };
    }
    case SET_RESULT: {
      return {
        ...state,
        result: action.payload,
      };
    }
    default:
      return state;
  }
}
