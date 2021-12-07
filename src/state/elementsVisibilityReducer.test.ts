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
  it('should return a correct boolean sideBarVisible property value', () => {
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
    expect(elementsVisibilityReducer(initState, sideBarVisibilityAction)).toMatchObject(newState);
    expect(elementsVisibilityReducer(initState, sideBarVisibilityAction)).toStrictEqual(newState);
    expect(
      elementsVisibilityReducer(initState, sideBarVisibilityAction).sideBarVisible
    ).not.toBeFalsy();
    expect(
      typeof elementsVisibilityReducer(initState, sideBarVisibilityAction).sideBarVisible
    ).toBe('boolean');
  });
  // ************************************
  it('should return a correct boolean resultScreenVisible property value', () => {
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
    expect(elementsVisibilityReducer(initState, resScreenVisibilityAction)).toMatchObject(newState);
    expect(elementsVisibilityReducer(initState, resScreenVisibilityAction)).toStrictEqual(newState);
    expect(
      elementsVisibilityReducer(initState, resScreenVisibilityAction).resultScreenVisible
    ).not.toBeFalsy();
    expect(
      typeof elementsVisibilityReducer(initState, resScreenVisibilityAction).resultScreenVisible
    ).toBe('boolean');
  });
  // ************************************
  it('should return a correct boolean swModaleVisible property value', () => {
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
    expect(elementsVisibilityReducer(initState, swMoadleVisibilityAction)).toMatchObject(newState);
    expect(elementsVisibilityReducer(initState, swMoadleVisibilityAction)).toStrictEqual(newState);
    expect(
      elementsVisibilityReducer(initState, swMoadleVisibilityAction).swModaleVisible
    ).not.toBeFalsy();
    expect(
      typeof elementsVisibilityReducer(initState, swMoadleVisibilityAction).swModaleVisible
    ).toBe('boolean');
  });
  // ***************************************
  it('should return a correct boolean isCardFlipped property value', () => {
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
    expect(elementsVisibilityReducer(initState, isFlippedAction)).toMatchObject(newState);
    expect(elementsVisibilityReducer(initState, isFlippedAction)).toStrictEqual(newState);
    expect(elementsVisibilityReducer(initState, isFlippedAction).isCardFlipped).not.toBeFalsy();
    expect(typeof elementsVisibilityReducer(initState, isFlippedAction).isCardFlipped).toBe(
      'boolean'
    );
  });
  // ***************************************
  it('should return a correct boolean isCardFlipped property value', () => {
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
    expect(elementsVisibilityReducer(initState, indicatorVisibilityAction)).toMatchObject(newState);
    expect(elementsVisibilityReducer(initState, indicatorVisibilityAction)).toStrictEqual(newState);
    expect(
      elementsVisibilityReducer(initState, indicatorVisibilityAction).indicatorVisibility
    ).not.toBeFalsy();
    expect(
      typeof elementsVisibilityReducer(initState, indicatorVisibilityAction).indicatorVisibility
    ).toBe('boolean');
  });
  // ***************************************
  it('should return a correct boolean isCardFlipped property value', () => {
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
    expect(elementsVisibilityReducer(initState, loadingLineVisibilityAction)).toMatchObject(
      newState
    );
    expect(elementsVisibilityReducer(initState, loadingLineVisibilityAction)).toStrictEqual(
      newState
    );
    expect(
      elementsVisibilityReducer(initState, loadingLineVisibilityAction).loadingLineVisibility
    ).not.toBeFalsy();
    expect(
      typeof elementsVisibilityReducer(initState, loadingLineVisibilityAction).loadingLineVisibility
    ).toBe('boolean');
  });
});
