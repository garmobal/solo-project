// issue with redux - info coming from redux no probs 
//dispatch is fetching students when no students. 
//student list dispatch is incorrect see StudentList.js

import React from 'react'
import StudentList from './StudentList'
import {render, screen} from '@testing-library/react'
import {Provider} from 'react-redux'

test('renders "no students" when list is empty', () => {
 render(<Provider><StudentList importingSS={[]} /></Provider>)
  expect(screen.getByText('You have no students yet')).toBeInTheDocument()
})

test('renders students names in list', () => {
  render(<Provider><StudentList importingSS={['sarah, tom, dave']} /></Provider>)
   expect(screen.getByText('sarah')).toBeInTheDocument()
   expect(screen.getByText('tom')).toBeInTheDocument()
   expect(screen.getByText('dave')).toBeInTheDocument()
 })