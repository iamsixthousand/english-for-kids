export interface GetResult {
  // eslint-disable-next-line no-unused-vars
  (arg: string): void;
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
