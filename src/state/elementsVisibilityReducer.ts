import {
  SIDEBAR_VISIBILITY,
  RESULT_SCREEN_VISIBILITY,
  SW_MODALE_VISIBILITY,
  IS_CARD_FLIPPED,
  NETWORK_INDICATOR_VISIBILITY,
} from './elementsVisibilityAC';
import { ElementsVisibilityState } from '../@core/interfaces';

type SidebarVisibilityActionType = 'SIDEBAR_VISIBILITY';
type ResultScreenVisibilityActionType = 'RESULT_SCREEN_VISIBILITY';
type SWModaleVisibilityActionType = 'SW_MODALE_VISIBILITY';
type isCardFlippedActionType = 'IS_CARD_FLIPPED';
type indicatorVisibilityActionType = 'NETWORK_INDICATOR_VISIBILITY';

interface SidebarVisibilityAction {
  type: SidebarVisibilityActionType;
  sideBarVisible: boolean;
}

interface ResultScreenVisibilityAction {
  type: ResultScreenVisibilityActionType;
  resultScreenVisible: boolean;
}

interface SWModaleVisibilityAction {
  type: SWModaleVisibilityActionType;
  swModaleVisible: boolean;
}

interface isCardFlippedAction {
  type: isCardFlippedActionType;
  isCardFlipped: boolean;
}

interface indicatorVisibilityAction {
  type: indicatorVisibilityActionType;
  indicatorVisibility: boolean;
}

type ElementsVisibilityAction =
  | SidebarVisibilityAction
  | ResultScreenVisibilityAction
  | SWModaleVisibilityAction
  | isCardFlippedAction
  | indicatorVisibilityAction;

const initState: ElementsVisibilityState = {
  sideBarVisible: false,
  resultScreenVisible: false,
  swModaleVisible: false,
  isCardFlipped: false,
  indicatorVisibility: false,
};

export default function elementsVisibilityReducer(
  state = initState,
  action: ElementsVisibilityAction
): ElementsVisibilityState {
  switch (action.type) {
    case SIDEBAR_VISIBILITY: {
      return {
        ...state,
        sideBarVisible: action.sideBarVisible,
      };
    }
    case RESULT_SCREEN_VISIBILITY: {
      return {
        ...state,
        resultScreenVisible: action.resultScreenVisible,
      };
    }
    case SW_MODALE_VISIBILITY: {
      return {
        ...state,
        swModaleVisible: action.swModaleVisible,
      };
    }
    case IS_CARD_FLIPPED: {
      return {
        ...state,
        isCardFlipped: action.isCardFlipped,
      };
    }
    case NETWORK_INDICATOR_VISIBILITY: {
      return {
        ...state,
        indicatorVisibility: action.indicatorVisibility,
      };
    }
    default:
      return state;
  }
}
