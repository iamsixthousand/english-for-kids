/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CardHolder } from './CardHolder';
import { renderWithStore } from '../../test-utils';

describe('CardHolder component:', () => {
  const mockGameStepsFunc = jest.fn();

  it('should contain CategoryCard components in it', () => {
    renderWithStore(
      <MemoryRouter>
        <CardHolder id="" gameStepsFunc={mockGameStepsFunc} />
      </MemoryRouter>
    );
    expect(screen.getAllByTestId('CategoryCard')).toHaveLength(6);
  });
  it('should contain ItemCard components', () => {
    renderWithStore(
      <MemoryRouter>
        <CardHolder id="3" gameStepsFunc={mockGameStepsFunc} />
      </MemoryRouter>
    );
    expect(screen.getAllByTestId('ItemCard')).toHaveLength(8);
  });
  describe('matches snapshot', () => {
    it('with no id', () => {
      const cardHolderComp = renderWithStore(
        <MemoryRouter>
          <CardHolder id="" gameStepsFunc={mockGameStepsFunc} />
        </MemoryRouter>
      );
      expect(cardHolderComp).toMatchSnapshot();
    });
    it('with transmitted id', () => {
      const cardHolderComp = renderWithStore(
        <MemoryRouter>
          <CardHolder id="3" gameStepsFunc={mockGameStepsFunc} />
        </MemoryRouter>
      );
      expect(cardHolderComp).toMatchSnapshot();
    });
  });
});
