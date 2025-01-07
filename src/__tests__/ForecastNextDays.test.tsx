import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import ForecastNextDays from '../components/forecast_components/ForecastNextDays';

test('renders ForecastNextDays component without crashing', () => {
  render(
    <Provider store={store}>
      <ForecastNextDays />
    </Provider>
  );
});

test('hide button works correctly', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <ForecastNextDays />
    </Provider>
  );
  const hideButton = getByTestId('hide-button');
  fireEvent.click(hideButton);
  expect(hideButton).toHaveClass('cursor-pointer py-3 drop-shadow-xl');
});
