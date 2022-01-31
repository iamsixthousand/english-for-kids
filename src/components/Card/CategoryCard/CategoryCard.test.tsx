/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import { CategoryCard } from './CategoryCard';
import { categories } from '../../../cardData';
import { renderWithStore } from '../../../test-utils';

describe('CategoryCard component:', () => {
  const { title } = categories[0];
  const { image } = categories[0];

  it('should contain correct input title text', () => {
    renderWithStore(<CategoryCard title={title} image={image} />);
    expect(screen.getByText('Action (set A)')).toBeInTheDocument();
  });
  it('should contain image', () => {
    renderWithStore(<CategoryCard title={title} image={image} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('matches snapshot', () => {
    const categoryCard = renderWithStore(<CategoryCard title={title} image={image} />);
    expect(categoryCard).toMatchSnapshot();
  });
});
