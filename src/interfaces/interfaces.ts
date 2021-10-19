export interface MainPageProps {
  isPlaying: boolean;
}

export interface CardHolderProps {
  isPlaying: boolean;
  id: string;
  isItemCard: boolean; //kind of cards (category/item) to display ??
}

export interface InteractiveBlockProps {
  isPlaying: boolean;
  id: string;
}

export interface ItemCardProps {
  word: string;
  translation: string;
  audio: string;
  image: string;
  isPlaying: boolean;
}

export interface CategoryCardProps {
  title: string;
  image: string;
  isPlaying: boolean;
}

export interface HeaderProps {
  cb: () => void;
  sideBarToggle: () => void;
  setModeToggle: () => void;
}

export interface ResultScreenProps {
  isWinner: boolean;
}

export interface StatsBlockProps {
  correct: [];
  wrong: [];
}

export interface SideBarProps {
  isPlaying: boolean;
  cbToggle: () => void;
}

export interface MatchParams {
  id: string;
}
