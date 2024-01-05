
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
    // Add your specific tests here
    // For example: expect(screen.getByText('Your Text Here')).toBeInTheDocument();
  });
});