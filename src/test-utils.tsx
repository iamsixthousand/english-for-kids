import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import gameProcessReducer from './state/gameProcessReducer';

const WithStoreProvider: React.FC = ({ children }) => {
  const myStore = createStore(
    combineReducers({
      gameProcess: gameProcessReducer,
    })
  );
  return <Provider store={myStore}>{children}</Provider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: WithStoreProvider, ...options });

export * from '@testing-library/react';
export { customRender as render };
