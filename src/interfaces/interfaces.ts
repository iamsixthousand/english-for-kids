export interface GetResult {
  // eslint-disable-next-line no-unused-vars
  (arg: string): void;
}

export interface MainPageProps {
  isPlaying: boolean;
  isGameStarted: boolean;
  gameStartedToggle: () => void;
  resultScreenVisibilityToggle: () => void;
  getResult: GetResult;
}

export interface CardHolderProps {
  isPlaying: boolean;
  id: string;
  isGameStarted: boolean;
  gameStepsFunc: () => void;
  isBlocking: boolean;
}

export interface PageInfoBlockProps {
  isPlaying: boolean;
  id: string;
  newGameFunc: () => void;
  isGameStarted: boolean;
  restartGameFunc: () => void;
  replayWord: () => void;
  setIsBlockingToggle: () => void;
}

export interface ItemCardProps {
  word: string;
  translation: string;
  audio: string;
  image: string;
  isPlaying: boolean;
  inGameAnswer: () => void;
  isGameStarted: boolean;
}

export interface CategoryCardProps {
  title: string;
  image: string;
  isPlaying: boolean;
}

export interface HeaderProps {
  sideBarToggle: () => void;
  setModeToggle: () => void;
  isPlaying: boolean;
}

export interface ResultScreenProps {
  resultScreenVisibilityToggle: () => void;
  viewResultScreen: boolean;
  finalResult: string;
}

export interface StatsBlockProps {
  isPlaying: boolean;
  isGameStarted: boolean;
  id: string;
  answers: boolean[];
}

export interface SideBarProps {
  isPlaying: boolean;
  cbToggle: () => void;
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
