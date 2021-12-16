/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CardHolder } from './CardHolder';
import { render } from '../../test-utils';

describe('CardHolder component:', () => {
  const mockGameStepsFunc = jest.fn();

  it('should contain 6 CategoryCard components in it', () => {
    render(
      <MemoryRouter>
        <CardHolder id="" gameStepsFunc={mockGameStepsFunc} />
      </MemoryRouter>
    );
    expect(screen.getAllByRole('gridcell')).toHaveLength(6);
    expect(screen.getAllByRole('link')).toHaveLength(6);
  });
  it('should contain 8 ItemCard components', () => {
    render(
      <MemoryRouter>
        <CardHolder id="3" gameStepsFunc={mockGameStepsFunc} />
      </MemoryRouter>
    );
    expect(screen.getAllByRole('gridcell')).toHaveLength(8);
  });
  describe('matches snapshot', () => {
    it('with no id', () => {
      const cardHolderComp = render(
        <MemoryRouter>
          <CardHolder id="" gameStepsFunc={mockGameStepsFunc} />
        </MemoryRouter>
      );
      expect(cardHolderComp).toMatchSnapshot();
    });
    it('with transmitted id', () => {
      const cardHolderComp = render(
        <MemoryRouter>
          <CardHolder id="3" gameStepsFunc={mockGameStepsFunc} />
        </MemoryRouter>
      );
      expect(cardHolderComp).toMatchSnapshot();
    });
  });
});
