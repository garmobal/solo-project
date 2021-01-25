import React from 'react';
import StudentCard from './StudentCard';
import {render, screen} from '@testing-library/react'

describe('StudentCard', () => {

  const mockstudent = {name: '', completedtests: [], pendingtests: [{}, {}] };

test('Should render student card', () => {
  render(<StudentCard student={mockstudent}></StudentCard> )
  expect(mockstudent.name).toEqual(mockstudent.name);
});

test('Should render the amount of pending tests', () => {
  render (<StudentCard student={mockstudent}></StudentCard> )
  expect(mockstudent.pendingtests.length).toEqual(mockstudent.pendingtests.length)
})

test('Should render all student cards', () => {

})

test('Should render "Import Students" button', () => {

  });
});