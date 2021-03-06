/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';
import { renderWithStore } from '../../test-utils';

describe('CardHolder component:', () => {
  const mockSideBarToggle = jest.fn();
  const mockSetModeToggle = jest.fn();
  const mockSetIsBlockingToggle = jest.fn();

  it('matches snapshot', () => {
    const headerComp = renderWithStore(
      <MemoryRouter>
        <Header
          sideBarToggle={mockSideBarToggle}
          setModeToggle={mockSetModeToggle}
          setIsBlockingToggle={mockSetIsBlockingToggle}
        />
      </MemoryRouter>
    );
    expect(headerComp).toMatchSnapshot();
  });
});
