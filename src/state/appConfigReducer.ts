import {
  APP_LANGUAGE_SET,
  APP_INNERWIDTH_SET,
  AppLanguageSetActionType,
  AppInnerWidthActionType,
} from './appConfigAC';
import { AppConfigState } from '../@core/interfaces';

interface AppLanguageSetAction {
  type: AppLanguageSetActionType;
  payload: string;
}

interface AppInnerWidthAction {
  type: AppInnerWidthActionType;
  payload: number;
}

export type AppConfigAction = AppLanguageSetAction | AppInnerWidthAction;

const initState: AppConfigState = {
  language: '',
  innerWidth: 1600,
};

export default function appConfigReducer(
  state = initState,
  action: AppConfigAction
): AppConfigState {
  switch (action.type) {
    case APP_LANGUAGE_SET: {
      return {
        ...state,
        language: action.payload,
      };
    }
    case APP_INNERWIDTH_SET: {
      return {
        ...state,
        innerWidth: action.payload,
      };
    }
    default:
      return state;
  }
}
