
import React from 'react';
import Provider from 'react-redux'
import TestCreator from './TestCreator';
import { shallow } from 'enzyme';

it('renders with out crashing', () => {
  shallow(<Provider><TestCreator /></Provider>);
});