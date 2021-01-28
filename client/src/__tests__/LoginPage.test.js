import { render, screen, fireEvent } from '@testing-library/react';
// import { renderIntoDocument } from 'react-testing-library';
import LoginPage from '../components/Authentication/LoginPage/LoginPage';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);
const authenticate = () => ({ type: 'AUTHENTIFY' });
const mockUser = { username: 'batman', password: 'aligator1' };

describe('Login Page', () => {
  // beforeEach(() => {
  //   mockStore = mockStore({
  //     myState: 'none',
  //   });
  // });

  //Test to be Implmented, cant submit e.target
  it('should pass login details to the authenitcator', () => {
    const initialState = 'none';
    const store = mockStore(initialState);

    const { getByLabelText, getByRole, unmount } = render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );

    const form = screen.getByTestId('login-form');
    console.log('form ----->', form);
    const actions = store.getActions();
    form.submit();
  });
});
