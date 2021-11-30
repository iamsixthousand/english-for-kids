export const SIDEBAR_VISIBILITY = 'SIDEBAR_VISIBILITY';
export const RESULT_SCREEN_VISIBILITY = 'RESULT_SCREEN_VISIBILITY';
export const SW_MODALE_VISIBILITY = 'SW_MODALE_VISIBILITY';
export const IS_CARD_FLIPPED = 'IS_CARD_FLIPPED';
export const NETWORK_INDICATOR_VISIBILITY = 'NETWORK_INDICATOR_VISIBILITY';
export const LOADING_LINE_VISIBILITY = 'LOADING_LINE_VISIBILITY';

export type SidebarVisibilityActionType = typeof SIDEBAR_VISIBILITY;
export type ResultScreenVisibilityActionType = typeof RESULT_SCREEN_VISIBILITY;
export type SWModaleVisibilityActionType = typeof SW_MODALE_VISIBILITY;
export type IsCardFlippedActionType = typeof IS_CARD_FLIPPED;
export type IndicatorVisibilityActionType = typeof NETWORK_INDICATOR_VISIBILITY;
export type LoadingLineVisibilityActionType = typeof LOADING_LINE_VISIBILITY;

interface SidebarVisibilitySetAC {
  (sideBarVisible: boolean): {
    type: SidebarVisibilityActionType;
    payload: typeof sideBarVisible;
  };
}

interface ResultScreenVisibilitySetAC {
  (resultScreenVisible: boolean): {
    type: ResultScreenVisibilityActionType;
    payload: typeof resultScreenVisible;
  };
}

interface SWModaleVisibilitySetAC {
  (swModaleVisible: boolean): {
    type: SWModaleVisibilityActionType;
    payload: typeof swModaleVisible;
  };
}

interface IsCardFlippedSetAC {
  (isCardFlipped: boolean): {
    type: IsCardFlippedActionType;
    payload: typeof isCardFlipped;
  };
}

interface NetworkIndicatorVisibilitySetAC {
  (indicatorVisibility: boolean): {
    type: IndicatorVisibilityActionType;
    payload: typeof indicatorVisibility;
  };
}

interface LoadingLineVisibilitySetAC {
  (loadingLineVisibility: boolean): {
    type: LoadingLineVisibilityActionType;
    payload: typeof loadingLineVisibility;
  };
}

export const sideBarVisibilitySetAC: SidebarVisibilitySetAC = (sideBarVisible) => {
  return {
    type: SIDEBAR_VISIBILITY,
    payload: sideBarVisible,
  };
};

export const resultScreenVisibilitySetAC: ResultScreenVisibilitySetAC = (resultScreenVisible) => {
  return {
    type: RESULT_SCREEN_VISIBILITY,
    payload: resultScreenVisible,
  };
};

export const swModaleVisibilitySetAC: SWModaleVisibilitySetAC = (swModaleVisible) => {
  return {
    type: SW_MODALE_VISIBILITY,
    payload: swModaleVisible,
  };
};

export const isCardFlippedSetAC: IsCardFlippedSetAC = (isCardFlipped) => {
  return {
    type: IS_CARD_FLIPPED,
    payload: isCardFlipped,
  };
};

export const networkIndicatorVisibilitySetAC: NetworkIndicatorVisibilitySetAC = (
  indicatorVisibility
) => {
  return {
    type: NETWORK_INDICATOR_VISIBILITY,
    payload: indicatorVisibility,
  };
};

export const loadingLineVisibilitySetAC: LoadingLineVisibilitySetAC = (loadingLineVisibility) => {
  return {
    type: LOADING_LINE_VISIBILITY,
    payload: loadingLineVisibility,
  };
};
