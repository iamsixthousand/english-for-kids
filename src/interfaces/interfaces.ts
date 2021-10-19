export interface MainPageProps {
  isPlaying: boolean;
  isGameStarted: boolean;
  gameStartedToggle: () => void;
}

export interface CardHolderProps {
  isPlaying: boolean;
  id: string;
  isGameStarted: boolean;
  gameStepsFunc: () => void;
}

export interface PageInfoBlockProps {
  isPlaying: boolean;
  id: string;
  gameStartedToggle: () => void;
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
}

export interface ResultScreenProps {
  isWinner: boolean;
}

export interface StatsBlockProps {
  isPlaying: boolean;
  isGameStarted: boolean;
  id: string;
  answersArrS: boolean[];
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
