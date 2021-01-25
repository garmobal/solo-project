import React from 'React';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import StudentDashboard from '../components/Student/StudentDashboard/StudentDashboard';
import { BrowserRouter } from 'react-router-dom';

test('loads teacher page in ' / '', async () => {
  render(
    <BrowserRouter>
      <StudentDashboard />
    </BrowserRouter>
  );
});
