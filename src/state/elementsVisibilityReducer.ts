import {
  SIDEBAR_VISIBILITY,
  RESULT_SCREEN_VISIBILITY,
  SW_MODALE_VISIBILITY,
  IS_CARD_FLIPPED,
  NETWORK_INDICATOR_VISIBILITY,
  LOADING_LINE_VISIBILITY,
  SidebarVisibilityActionType,
  ResultScreenVisibilityActionType,
  SWModaleVisibilityActionType,
  IsCardFlippedActionType,
  IndicatorVisibilityActionType,
  LoadingLineVisibilityActionType,
} from './elementsVisibilityAC';
import { ElementsVisibilityState } from '../@core/interfaces';

interface SidebarVisibilityAction {
  type: SidebarVisibilityActionType;
  payload: boolean;
}

interface ResultScreenVisibilityAction {
  type: ResultScreenVisibilityActionType;
  payload: boolean;
}

interface SWModaleVisibilityAction {
  type: SWModaleVisibilityActionType;
  payload: boolean;
}

interface isCardFlippedAction {
  type: IsCardFlippedActionType;
  payload: boolean;
}

interface indicatorVisibilityAction {
  type: IndicatorVisibilityActionType;
  payload: boolean;
}

interface LoadingLineVisibilityAction {
  type: LoadingLineVisibilityActionType;
  payload: boolean;
}

export type ElementsVisibilityAction =
  | SidebarVisibilityAction
  | ResultScreenVisibilityAction
  | SWModaleVisibilityAction
  | isCardFlippedAction
  | indicatorVisibilityAction
  | LoadingLineVisibilityAction;

const initState: ElementsVisibilityState = {
  sideBarVisible: false,
  resultScreenVisible: false,
  swModaleVisible: false,
  isCardFlipped: false,
  indicatorVisibility: false,
  loadingLineVisibility: false,
};

export default function elementsVisibilityReducer(
  state = initState,
  action: ElementsVisibilityAction
): ElementsVisibilityState {
  switch (action.type) {
    case SIDEBAR_VISIBILITY: {
      return {
        ...state,
        sideBarVisible: action.payload,
      };
    }
    case RESULT_SCREEN_VISIBILITY: {
      return {
        ...state,
        resultScreenVisible: action.payload,
      };
    }
    case SW_MODALE_VISIBILITY: {
      return {
        ...state,
        swModaleVisible: action.payload,
      };
    }
    case IS_CARD_FLIPPED: {
      return {
        ...state,
        isCardFlipped: action.payload,
      };
    }
    case NETWORK_INDICATOR_VISIBILITY: {
      return {
        ...state,
        indicatorVisibility: action.payload,
      };
    }
    case LOADING_LINE_VISIBILITY: {
      return {
        ...state,
        loadingLineVisibility: action.payload,
      };
    }
    default:
      return state;
  }
}
