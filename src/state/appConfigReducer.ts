import { APP_LANGUAGE_SET, APP_INNERWIDTH_SET } from './appConfigAC';
import { AppConfigState } from '../@core/interfaces';

type AppLanguageSetActionType = 'APP_LANGUAGE_SET';
type AppInnerWidthActionType = 'APP_INNERWIDTH_SET';

interface AppLanguageSetAction {
  type: AppLanguageSetActionType;
  language: string;
}

interface AppInnerWidthAction {
  type: AppInnerWidthActionType;
  innerWidth: number;
}

type AppConfigAction = AppLanguageSetAction | AppInnerWidthAction;

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
        language: action.language,
      };
    }
    case APP_INNERWIDTH_SET: {
      return {
        ...state,
        innerWidth: action.innerWidth,
      };
    }
    default:
      return state;
  }
}
