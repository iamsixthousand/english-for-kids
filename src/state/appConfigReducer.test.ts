/* eslint-disable no-undef */
import appConfigReducer, { AppConfigAction } from './appConfigReducer';
import { APP_LANGUAGE_SET, APP_INNERWIDTH_SET } from './appConfigAC';
import { AppConfigState } from '../@core/interfaces';

let initState: AppConfigState = {
  language: '',
  innerWidth: 1600,
};

describe('appConfigReducer:', () => {
  beforeEach(() => {
    initState = {
      language: '',
      innerWidth: 1600,
    };
  });
  it('return a correct state with language string', () => {
    const languageAction: AppConfigAction = {
      type: APP_LANGUAGE_SET,
      payload: 'en',
    };
    const newState = {
      language: 'en',
      innerWidth: 1600,
    };
    expect(appConfigReducer(initState, languageAction)).toMatchObject(newState);
    expect(appConfigReducer(initState, languageAction)).toStrictEqual(newState);
    expect(appConfigReducer(initState, languageAction).language).toBe('en');
  });

  it('return a correct state with innerWidth value of type number', () => {
    const innerWidthAction: AppConfigAction = {
      type: APP_INNERWIDTH_SET,
      payload: 800,
    };
    const newState = {
      language: '',
      innerWidth: 800,
    };
    expect(appConfigReducer(initState, innerWidthAction)).toMatchObject(newState);
    expect(appConfigReducer(initState, innerWidthAction)).toStrictEqual(newState);
    expect(appConfigReducer(initState, innerWidthAction).innerWidth).toBe(800);
    expect(typeof appConfigReducer(initState, innerWidthAction).innerWidth).toBe('number');
  });
});
