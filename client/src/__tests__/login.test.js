import React from 'React';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import StudentDashboard from '../components/Student/StudentDashboard/StudentDashboard';

describe('App', () => {
  it('loads teacher page in ' / '', async () => {
    render(
      <BrowserRouter>
        <StudentDashboard />
      </BrowserRouter>
    );
  });
});
