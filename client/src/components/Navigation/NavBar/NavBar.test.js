import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { App } from '../../../App';
import { NavBar } from './NavBar';
import { NavItems } from '../NavItems/NavItems';
import { MemoryRouter } from 'react-router';


jest.mock('./NavBar', () => jest.fn);
jest.mock('../NavItems/NavItems', () => jest.fn);


describe("Tests for NavBar Router", () => {
  test('Should render NavBar and NavItems on default route', () => {

    NavBar.mockImplementation(() => {<div>NavBarMock</div>});
    NavItems.mockImplementation(() => {<div>NavItemsMock</div>});

    render(
      <MemoryRouter>
      <App/>
      </MemoryRouter>
    );

    expect(screen.getByText("NavBarMock")).toBeInTheDocument();
    expect(screen.getByText("NavItemsMock")).toBeInTheDocument();
  });

})