/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import { ItemCard } from './ItemCard';
import { cards } from '../../../cardData';
import { renderWithStore } from '../../../test-utils';

describe('ItemCard component:', () => {
  const mockGameStepsFunc = jest.fn();
  const { word } = cards[0][0]; // cry
  const { image } = cards[0][0];
  const { translation } = cards[0][0]; // плакать
  const audio = cards[0][0].audioSrc;

  const renderComp = (
    <ItemCard
      word={word}
      translation={translation}
      audio={audio}
      image={image}
      inGameAnswer={mockGameStepsFunc}
    />
  );

  it('should contain correct word text', () => {
    renderWithStore(renderComp);
    expect(screen.getByText('cry')).toBeInTheDocument();
  });
  it('should contain correct translation text', () => {
    renderWithStore(renderComp);
    expect(screen.getByText('плакать')).toBeInTheDocument();
  });
  it('should contain 4 image elements', () => {
    renderWithStore(renderComp);
    expect(screen.getAllByRole('img')).toHaveLength(4);
  });
  it('should contain 4 button elements', () => {
    renderWithStore(renderComp);
    expect(screen.getAllByRole('button')).toHaveLength(4);
  });
  it('matches snapshot', () => {
    const categoryCard = renderWithStore(renderComp);
    expect(categoryCard).toMatchSnapshot();
  });
});
