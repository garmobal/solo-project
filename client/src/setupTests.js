import 'regenerator-runtime/runtime';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});
describe('App Component', () => {
  const app = shallow(<App />);

  it('renders successfully', () => {
    expect(app).toMatchSnapshot();
  });
});
