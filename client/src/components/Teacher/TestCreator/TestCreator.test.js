
import { render, screen } from '@testing-library/react';
import React from 'react';

import { TestCreator } from './TestCreator';

describe('TestCreator', () => {
  it('should render the page', () => {
    render(<TestCreator />);
    const newTest = screen.getByText('Start by adding some questions!');
    expect(newTest).toBeInTheDocument();
  });
   
 
});