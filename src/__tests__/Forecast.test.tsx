import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Forecast from '../components/Forecast';

test('renders loading state correctly', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Forecast />
    </Provider>
  );
  expect(getByTestId('loading')).toBeInTheDocument();
});

test('renders error state correctly', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Forecast />
    </Provider>
  );
  expect(getByTestId('error')).toBeInTheDocument();
});
