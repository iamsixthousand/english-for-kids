import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import gameProcessReducer from './state/gameProcessReducer';
import appConfigReducer from './state/appConfigReducer';
import elementsVisibilityReducer from './state/elementsVisibilityReducer';
import offlineReducer from './state/offlineReducer';

const WithStoreProvider: React.FC = ({ children }) => {
  const myStore = createStore(
    combineReducers({
      appConfig: appConfigReducer,
      elementVisibility: elementsVisibilityReducer,
      gameProcess: gameProcessReducer,
      offline: offlineReducer,
    })
  );
  return <Provider store={myStore}>{children}</Provider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: WithStoreProvider, ...options });

export * from '@testing-library/react';
export { customRender as renderWithStore };
