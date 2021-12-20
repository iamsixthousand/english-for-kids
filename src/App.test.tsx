/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { renderWithStore } from './test-utils';
import App from './App';

describe('App component:', () => {
  jest.spyOn(window, 'scrollTo');
  // ********************************ROUTING TESTS***********************************************
  describe('routes to', () => {
    it('main page with categories', () => {
      renderWithStore(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );

      expect(screen.getByText(/hello friend/i)).toBeInTheDocument();
    });
    it('emotions category page', () => {
      renderWithStore(
        <MemoryRouter initialEntries={['/category/6']}>
          <App />
        </MemoryRouter>
      );

      expect(screen.getByText(/emotions category/i)).toBeInTheDocument();
    });
  });
  // ***************************************************INTEGRATION TESTS**********************************************
  describe('opens', () => {
    it('sidebar on header button click', () => {
      const renderComp = renderWithStore(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
      const sideBarOpenButton = renderComp.getByTestId('SideBarOpenButton');
      // before user click
      // now SideBar is not active
      expect(renderComp.queryByTestId('SideBar active')).toBeFalsy(); // is not active
      // user click
      userEvent.click(sideBarOpenButton); // we have one element therefore index is 0
      // "Sidebar active" is a correct classname when sidebar is open
      expect(renderComp.getByTestId('SideBar active')).toBeInTheDocument(); // is active and visible
    });

    it('selected category on category cell click', () => {
      const renderComp = renderWithStore(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
      const categoryElements = renderComp.getAllByTestId('cellCategoryLink');
      // before user click
      expect(
        renderComp.queryByText('Action (Set B) category. Feel free to practice!')
      ).not.toBeInTheDocument();
      // user click
      userEvent.click(categoryElements[1]); // click on action set B card
      // Action set B is a correct page
      expect(
        renderComp.getByText('Action (Set B) category. Feel free to practice!')
      ).toBeInTheDocument(); // correct page
      expect(
        renderComp.queryByText('Emotions category. Feel free to practice!')
      ).not.toBeInTheDocument(); // incorrect page
    });
  });

  describe('shows', () => {
    it('start button if switch state changes', () => {
      const renderComp = renderWithStore(
        <MemoryRouter initialEntries={['/category/1']}>
          <App />
        </MemoryRouter>
      );
      const switchElement = renderComp.getByTestId('SwitchElement'); // get switch element
      // before user click
      expect(renderComp.getByTestId('StartGameButton')).toHaveClass('StartGameButton hide'); // element with hide class
      // user click
      userEvent.click(switchElement);
      expect(renderComp.getByTestId('StartGameButton')).toHaveClass('StartGameButton'); // app shows element
    });
  });
});
