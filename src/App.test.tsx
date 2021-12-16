/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { render } from './test-utils';
import App from './App';

describe('App component:', () => {
  window.scrollTo = jest.fn(); // to remove window.scrollTo error
  // ********************************ROUTING TESTS***********************************************
  describe('routes to', () => {
    it('main page with categories', () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );

      expect(screen.getByText(/hello friend/i)).toBeInTheDocument();
    });
    it('emotions category page', () => {
      render(
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
      const renderComp = render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
      const openButton = renderComp.container.getElementsByClassName('SideBarOpenButton');
      // before user click
      // now SideBar is not active
      expect(renderComp.container.getElementsByClassName('SideBar active')[0]).toBeFalsy(); // is not active
      // user click
      userEvent.click(openButton[0]); // we have one element therefore index is 0
      // "Sidebar active" is a correct classname when sidebar is open
      expect(renderComp.container.getElementsByClassName('SideBar active')[0]).toBeInTheDocument(); // is active and visible
    });

    it('selected category on category cell click', () => {
      const renderComp = render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
      const elements = renderComp.container.getElementsByClassName('Link');
      // before user click
      expect(
        renderComp.queryByText('Action (Set B) category. Feel free to practice!')
      ).not.toBeInTheDocument();
      // user click
      userEvent.click(elements[1]); // click on action set A card
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
      const renderComp = render(
        <MemoryRouter initialEntries={['/category/1']}>
          <App />
        </MemoryRouter>
      );
      const elements = renderComp.container.getElementsByClassName('Switch'); // get switch element
      // before user click
      expect(
        renderComp.container.getElementsByClassName('StartGameButton hide')[0]
      ).toBeInTheDocument(); // check button hide class
      // then get a part of switch to click
      const switchChild = elements[0].childNodes[0] as Element;
      // user click
      userEvent.click(switchChild);
      expect(renderComp.container.getElementsByClassName('StartGameButton hide')[0]).toBeFalsy(); // no element with hide class anymore
      expect(renderComp.container.getElementsByClassName('StartGameButton')[0]).toBeInTheDocument(); // app shows element
    });
  });
  // ***********************************SNAPSHOTS************************************************
  describe('matches snapshot', () => {
    it('on main page', () => {
      const appComp = render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );

      expect(appComp).toMatchSnapshot();
    });
    it('on emotions category page', () => {
      const appComp = render(
        <MemoryRouter initialEntries={['/category/6']}>
          <App />
        </MemoryRouter>
      );

      expect(appComp).toMatchSnapshot();
    });
    it('when sidebar is open', () => {
      const appComp = render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );

      const openButton = appComp.container.getElementsByClassName('SideBarOpenButton'); // get sidebar open button
      userEvent.click(openButton[0]); // open sidebar
      expect(appComp.container.getElementsByClassName('SideBar active')[0]).toBeInTheDocument(); // is active and visible
      expect(appComp).toMatchSnapshot();
    });
  });
});
