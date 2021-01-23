import React from 'react';
import StudentCard from './StudentCard';
import {render} from '@testing-library/react'

test('Should render student card', () => {
  const mockstudent = {name: '', completedtests: [], pendingtests: [] };
  render(<StudentCard student={mockstudent}></StudentCard> )
})

test('Should render "Import Students" button', () => {

  })