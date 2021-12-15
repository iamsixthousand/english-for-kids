/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { render } from './test-utils';
// import { act } from 'react-dom/test-utils';

import App from './App';

describe('App component:', () => {
  describe('routes to', () => {
    it('a correct main page with categories', () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );

      expect(screen.getByText(/hello friend/i)).toBeInTheDocument();
    });
    it('a correct main page with categories', () => {
      render(
        <MemoryRouter initialEntries={['/category/6']}>
          <App />
        </MemoryRouter>
      );

      expect(screen.getByText(/emotions category/i)).toBeInTheDocument();
    });
  });
});
