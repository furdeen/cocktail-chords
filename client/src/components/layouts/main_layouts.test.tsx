
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import MainLayout from './main_layouts';

// Mock Header and Outlet
vi.mock('../header/header', () => ({
  default: () => <div data-testid="header-mock">Header</div>
}));
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  Outlet: () => <div data-testid="outlet-mock">Outlet</div>
}));

describe('MainLayout', () => {
  it('renders Header and Outlet components', () => {
    render(<MainLayout />);

    const headerElement = screen.getByTestId('header-mock');
    const outletElement = screen.getByTestId('outlet-mock');

    expect(headerElement).toBeInTheDocument();
    expect(outletElement).toBeInTheDocument();
  });
});
