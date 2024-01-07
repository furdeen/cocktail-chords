
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from './not_found';

describe('NotFound Component', () => {
  it('renders the not found message', () => {
    render(<NotFound />);
    const headingElement = screen.getByText(/404 - Page not found/i);
    const paragraphElement = screen.getByText(/You came to the wrong place!/i);

    expect(headingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });
});