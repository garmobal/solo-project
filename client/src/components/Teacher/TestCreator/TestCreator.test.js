import React from 'react';

import { render, screen } from '../../../__tests__/test-utils';
import TestCreator from './TestCreator.tsx';

describe('TestCreator', () => {
  it('should render the page', () => {
    render(<TestCreator />);
    expect(
      screen.getByText(/Start by adding some questions!/i)
    ).toBeInTheDocument();
  });
});
