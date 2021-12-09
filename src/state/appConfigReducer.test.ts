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
  it('should return an object with a correct language string', () => {
    const languageAction: AppConfigAction = {
      type: APP_LANGUAGE_SET,
      payload: 'en',
    };
    const newState = {
      language: 'en',
      innerWidth: 1600,
    };
    expect(appConfigReducer(initState, languageAction)).toStrictEqual(newState);
  });
  // **********************************************************
  it('should return an object with a correct innerWidth value of type number', () => {
    const innerWidthAction: AppConfigAction = {
      type: APP_INNERWIDTH_SET,
      payload: 800,
    };
    const newState = {
      language: '',
      innerWidth: 800,
    };
    expect(appConfigReducer(initState, innerWidthAction)).toStrictEqual(newState);
  });
});
