export const APP_LANGUAGE_SET = 'APP_LANGUAGE_SET';
export const APP_INNERWIDTH_SET = 'APP_INNERWIDTH_SET';

export type AppLanguageSetActionType = typeof APP_LANGUAGE_SET;
export type AppInnerWidthActionType = typeof APP_INNERWIDTH_SET;

interface LanguageSetAC {
  (lang: string): {
    type: AppLanguageSetActionType;
    payload: typeof lang;
  };
}

interface InnerWidthSetAC {
  (innerWidth: number): {
    type: AppInnerWidthActionType;
    payload: typeof innerWidth;
  };
}

export const languageSetAC: LanguageSetAC = (lang) => {
  return {
    type: APP_LANGUAGE_SET,
    payload: lang,
  };
};

export const innerWidthSetAC: InnerWidthSetAC = (innerWidth) => {
  return {
    type: APP_INNERWIDTH_SET,
    payload: innerWidth,
  };
};
