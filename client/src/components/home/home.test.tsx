import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Home from './home';

describe('Home Component', () => {
  beforeEach(() => {
    // Set up the mock for the global fetch function
    vi.spyOn(global, 'fetch').mockImplementation((url) =>
      Promise.resolve({
        json: () => Promise.resolve([{ strDrinkThumb: 'mockImage.jpg' }]),
      })
    );
  });

  afterEach(() => {
    // Restore the original fetch implementation after each test
    vi.restoreAllMocks();
  });

  it('displays loading initially', () => {
    render(<Home />);
    const loadingElement = screen.getByText('Loading...');
    expect(loadingElement).toBeInTheDocument();
  });

  it('renders images after fetch', async () => {
    render(<Home />);

    await waitFor(() => {
      const images = screen.getAllByRole('img');
      expect(images.length).toBeGreaterThan(0);
    });
  });

  it('handles fetch error', async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject('API failure'));

    render(<Home />);

    await waitFor(() => {
      const loadingElement = screen.queryByText('Loading...');
      expect(loadingElement).not.toBeInTheDocument();
      // Add more assertions if you have specific error handling logic
    });
  });

  it('renders the correct number of images', async () => {
    render(<Home />);

    await waitFor(() => {
      const images = screen.getAllByRole('img');
      expect(images).toHaveLength(4); // Assuming the API returns 4 images
    });
  });
});