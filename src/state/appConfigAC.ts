/* eslint-disable object-shorthand */
export const APP_LANGUAGE_SET = 'APP_LANGUAGE_SET';
export const APP_INNERWIDTH_SET = 'APP_INNERWIDTH_SET';

interface LanguageSetAC {
  (lang: string): {
    type: string;
    language: typeof lang;
  };
}

interface InnerWidthSetAC {
  (innerWidth: number): {
    type: string;
    innerWidth: typeof innerWidth;
  };
}

export const languageSetAC: LanguageSetAC = (lang) => {
  return {
    type: APP_LANGUAGE_SET,
    language: lang,
  };
};

export const innerWidthSetAC: InnerWidthSetAC = (innerWidth) => {
  return {
    type: APP_INNERWIDTH_SET,
    innerWidth: innerWidth,
  };
};
