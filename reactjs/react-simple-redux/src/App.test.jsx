import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import App from './App';

test('renders heading', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const heading = screen.getByText(/hello/i);
  expect(heading).toBeInTheDocument();
});