export interface GetResult {
  // eslint-disable-next-line no-unused-vars
  (arg: number): void;
}

export interface MatchParams {
  id: string;
}

export interface WordCard {
  word: string;
  translation: string;
  audioSrc: string;
  image: string;
}

// ***********STATE********************
export interface ElementsVisibilityState {
  sideBarVisible: boolean;
  resultScreenVisible: boolean;
  swModaleVisible: boolean;
  isCardFlipped: boolean;
  indicatorVisibility: boolean;
  loadingLineVisibility: boolean;
}

export interface AppConfigState {
  language: string;
  innerWidth: number;
}

export interface GameProcessState {
  isPlaying: boolean;
  isGameStarted: boolean;
  isBlocking: boolean;
  answers: boolean[]; // waits for answer as boolean
  result: number;
}

export interface OfflineState {
  isOffline: boolean;
  offlineContentVisible: boolean;
  forReload: boolean; // for comp reload if offline
}

export interface AppState {
  appConfig: AppConfigState;
  elementVisibility: ElementsVisibilityState;
  gameProcess: GameProcessState;
  offline: OfflineState;
}
