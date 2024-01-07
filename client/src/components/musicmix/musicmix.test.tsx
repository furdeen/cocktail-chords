import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import MusicMix from './musicmix';

it('renders the MusicMix component', () => {
  render(<MusicMix />);
  expect(screen.getByTestId('music-mix')).toBeInTheDocument();
  expect(screen.getByText('Chord & Mix Matchmaker')).toBeInTheDocument();
});
it('handles category click', async () => {
    render(<MusicMix />);
    const firstCategoryLink = screen.getAllByRole('link')[0];
    fireEvent.click(firstCategoryLink);
    // Add expectations relevant to category click effects
  });


  describe('MusicMix Component', () => {
    beforeEach(() => {
      // Spy on global fetch and mock its implementation
      vi.spyOn(global, 'fetch').mockImplementation((url) => {
        if (url.includes('CategoryCocktailSong')) {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve({
              // Mocked response data for the drink item click test
              strDrink: 'Mocktail',
              strDrinkThumb: 'mocktail.jpg',
              idDrink: '11700',
            }),
          });
        }
        // Add other conditional mocks for different URLs if necessary
        return Promise.resolve({ ok: true, json: () => Promise.resolve([]) });
      });
    });
  
    afterEach(() => {
      // Restore the original fetch implementation after each test
      vi.restoreAllMocks();
    });
  
    it('renders the MusicMix component', async () => {
      render(<MusicMix />);
      expect(screen.getByTestId('music-mix')).toBeInTheDocument();
      expect(screen.getByText('Chord & Mix Matchmaker')).toBeInTheDocument();
    });
  
    it('handles category click', async () => {
      render(<MusicMix />);
      const firstCategoryLink = screen.getAllByRole('link')[0];
      fireEvent.click(firstCategoryLink);
      // Add assertions for effects of category click
    });
  
    // it('handles drink item click', async () => {
    //   render(<MusicMix />);
    //   // Wait for mocked items to be rendered
    //   const drinkItem = await waitFor(() => screen.findByDisplayValue('drink-item-11007'), { timeout: 5000 });
    //   fireEvent.click(drinkItem);
    //   // Assertions to verify the component's behavior after the click
    // });
  
    it('fetches drinks on category click', async () => {
      render(<MusicMix />);
      const firstCategoryLink = screen.getAllByRole('link')[0];
      fireEvent.click(firstCategoryLink);
      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalled();
      });
    });
  });
