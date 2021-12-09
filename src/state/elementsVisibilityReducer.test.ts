/* eslint-disable no-undef */
import elementsVisibilityReducer, { ElementsVisibilityAction } from './elementsVisibilityReducer';
import {
  SIDEBAR_VISIBILITY,
  RESULT_SCREEN_VISIBILITY,
  SW_MODALE_VISIBILITY,
  IS_CARD_FLIPPED,
  NETWORK_INDICATOR_VISIBILITY,
  LOADING_LINE_VISIBILITY,
} from './elementsVisibilityAC';
import { ElementsVisibilityState } from '../@core/interfaces';

let initState: ElementsVisibilityState = {
  sideBarVisible: false,
  resultScreenVisible: false,
  swModaleVisible: false,
  isCardFlipped: false,
  indicatorVisibility: false,
  loadingLineVisibility: false,
};

describe('elementsVisibilityReducer:', () => {
  beforeEach(() => {
    initState = {
      sideBarVisible: false,
      resultScreenVisible: false,
      swModaleVisible: false,
      isCardFlipped: false,
      indicatorVisibility: false,
      loadingLineVisibility: false,
    };
  });
  // ***********************************
  it('should return an object with a correct boolean sideBarVisible property value true', () => {
    const sideBarVisibilityAction: ElementsVisibilityAction = {
      type: SIDEBAR_VISIBILITY,
      payload: true,
    };

    const newState = {
      sideBarVisible: true,
      resultScreenVisible: false,
      swModaleVisible: false,
      isCardFlipped: false,
      indicatorVisibility: false,
      loadingLineVisibility: false,
    };
    expect(elementsVisibilityReducer(initState, sideBarVisibilityAction)).toStrictEqual(newState);
  });
  // ************************************
  it('should return an object with a correct boolean resultScreenVisible property value true', () => {
    const resScreenVisibilityAction: ElementsVisibilityAction = {
      type: RESULT_SCREEN_VISIBILITY,
      payload: true,
    };

    const newState = {
      sideBarVisible: false,
      resultScreenVisible: true,
      swModaleVisible: false,
      isCardFlipped: false,
      indicatorVisibility: false,
      loadingLineVisibility: false,
    };
    expect(elementsVisibilityReducer(initState, resScreenVisibilityAction)).toStrictEqual(newState);
  });
  // ************************************
  it('should return an object with a correct boolean swModaleVisible property value true', () => {
    const swMoadleVisibilityAction: ElementsVisibilityAction = {
      type: SW_MODALE_VISIBILITY,
      payload: true,
    };

    const newState = {
      sideBarVisible: false,
      resultScreenVisible: false,
      swModaleVisible: true,
      isCardFlipped: false,
      indicatorVisibility: false,
      loadingLineVisibility: false,
    };

    expect(elementsVisibilityReducer(initState, swMoadleVisibilityAction)).toStrictEqual(newState);
  });
  // ***************************************
  it('should return an object with a correct boolean isCardFlipped property value true', () => {
    const isFlippedAction: ElementsVisibilityAction = {
      type: IS_CARD_FLIPPED,
      payload: true,
    };

    const newState = {
      sideBarVisible: false,
      resultScreenVisible: false,
      swModaleVisible: false,
      isCardFlipped: true,
      indicatorVisibility: false,
      loadingLineVisibility: false,
    };
    expect(elementsVisibilityReducer(initState, isFlippedAction)).toStrictEqual(newState);
  });
  // ***************************************
  it('should return an object with a correct boolean isCardFlipped property value true', () => {
    const indicatorVisibilityAction: ElementsVisibilityAction = {
      type: NETWORK_INDICATOR_VISIBILITY,
      payload: true,
    };

    const newState = {
      sideBarVisible: false,
      resultScreenVisible: false,
      swModaleVisible: false,
      isCardFlipped: false,
      indicatorVisibility: true,
      loadingLineVisibility: false,
    };
    expect(elementsVisibilityReducer(initState, indicatorVisibilityAction)).toStrictEqual(newState);
  });
  // ***************************************
  it('should return an object with a correct boolean isCardFlipped property value true', () => {
    const loadingLineVisibilityAction: ElementsVisibilityAction = {
      type: LOADING_LINE_VISIBILITY,
      payload: true,
    };

    const newState = {
      sideBarVisible: false,
      resultScreenVisible: false,
      swModaleVisible: false,
      isCardFlipped: false,
      indicatorVisibility: false,
      loadingLineVisibility: true,
    };
    expect(elementsVisibilityReducer(initState, loadingLineVisibilityAction)).toStrictEqual(
      newState
    );
  });
});
