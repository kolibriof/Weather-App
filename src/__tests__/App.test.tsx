import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import SearchBar from '../components/SearchBar';
import Forecast from '../components/Forecast';

test('renders App component without crashing', () => {
  render(<App />);
});

test('renders SearchBar component', () => {
  const { getByTestId } = render(<SearchBar />);
  expect(getByTestId('search-input')).toBeInTheDocument();
});

test('renders Forecast component', () => {
  const { getByTestId } = render(<Forecast />);
  expect(getByTestId('loading')).toBeInTheDocument();
});
