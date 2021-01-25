import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './index.tsx';


import App from './App';

describe('App', () => {
  it('should render the App', () => {
    render(< App/>);
    const newTest = screen.getByText('Add a new test');
    expect(newTest).toBeInTheDocument();
  });
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
 
});
