/* eslint-disable object-shorthand */
export const SIDEBAR_VISIBILITY = 'SIDEBAR_VISIBILITY';
export const RESULT_SCREEN_VISIBILITY = 'RESULT_SCREEN_VISIBILITY';
export const SW_MODALE_VISIBILITY = 'SW_MODALE_VISIBILITY';
export const IS_CARD_FLIPPED = 'IS_CARD_FLIPPED';
export const NETWORK_INDICATOR_VISIBILITY = 'NETWORK_INDICATOR_VISIBILITY';

interface SidebarVisibilitySetAC {
  (sideBarVisible: boolean): {
    type: string;
    sideBarVisible: typeof sideBarVisible;
  };
}

interface ResultScreenVisibilitySetAC {
  (resultScreenVisible: boolean): {
    type: string;
    resultScreenVisible: typeof resultScreenVisible;
  };
}

interface SWModaleVisibilitySetAC {
  (swModaleVisible: boolean): {
    type: string;
    swModaleVisible: typeof swModaleVisible;
  };
}

interface IsCardFlippedSetAC {
  (isCardFlipped: boolean): {
    type: string;
    isCardFlipped: typeof isCardFlipped;
  };
}

interface NetworkIndicatorVisibilitySetAC {
  (indicatorVisibility: boolean): {
    type: string;
    indicatorVisibility: typeof indicatorVisibility;
  };
}

export const sideBarVisibilitySetAC: SidebarVisibilitySetAC = (sideBarVisible) => {
  return {
    type: SIDEBAR_VISIBILITY,
    sideBarVisible: sideBarVisible,
  };
};

export const resultScreenVisibilitySetAC: ResultScreenVisibilitySetAC = (resultScreenVisible) => {
  return {
    type: RESULT_SCREEN_VISIBILITY,
    resultScreenVisible: resultScreenVisible,
  };
};

export const swModaleVisibilitySetAC: SWModaleVisibilitySetAC = (swModaleVisible) => {
  return {
    type: SW_MODALE_VISIBILITY,
    swModaleVisible: swModaleVisible,
  };
};

export const isCardFlippedSetAC: IsCardFlippedSetAC = (isCardFlipped) => {
  return {
    type: IS_CARD_FLIPPED,
    isCardFlipped: isCardFlipped,
  };
};

export const networkIndicatorVisibilitySetAC: NetworkIndicatorVisibilitySetAC = (
  indicatorVisibility
) => {
  return {
    type: NETWORK_INDICATOR_VISIBILITY,
    indicatorVisibility: indicatorVisibility,
  };
};
