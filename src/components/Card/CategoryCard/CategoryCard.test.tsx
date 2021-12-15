/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { CategoryCard } from './CategoryCard';
import { categories } from '../../../cardData';
import { render } from '../../../test-utils';

describe('CategoryCard component:', () => {
  const { title } = categories[0];
  const { image } = categories[0];

  it('should contain correct input title text', () => {
    render(<CategoryCard title={title} image={image} />);
    expect(screen.getByText('Action (set A)')).toBeInTheDocument();
  });
  it('should contain image', () => {
    render(<CategoryCard title={title} image={image} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('matches snapshot', () => {
    const categoryCard = render(<CategoryCard title={title} image={image} />);
    expect(categoryCard).toMatchSnapshot();
  });
});
