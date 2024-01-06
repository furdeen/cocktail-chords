import { render ,waitFor,screen} from '@testing-library/react';
import DrinkMusicDetails from './drink_music_details';
import DeezerWidget from '../widgets/deezer_widget';
import '@testing-library/jest-dom';

describe('DrinkMusicDetails Component', () => {
    const mockProps = {
      strDrink: 'Mocktail Sunrise',
      ingredients: ['Orange Juice', 'Grenadine', 'Soda'],
      measures: ['1 cup', '1 tbsp', '1/2 cup'],
      strInstructions: 'Mix all ingredients and serve chilled.',
      strDrinkThumb: 'mocktail.jpg',
      trackId: '123456789'
    };
  
    it('renders with correct data', () => {
      render(<DrinkMusicDetails {...mockProps} />);
  
      expect(screen.getByText(mockProps.strDrink)).toBeInTheDocument();
      expect(screen.getByText(mockProps.strInstructions)).toBeInTheDocument();
      mockProps.ingredients.forEach((ingredient, index) => {
        expect(screen.getByText(`${ingredient} - ${mockProps.measures[index]}`)).toBeInTheDocument();
      });
      expect(screen.getByAltText(mockProps.strDrink)).toHaveAttribute('src', mockProps.strDrinkThumb);
    });

    // it('renders DeezerWidget with correct trackId', () => {
    //     render(<DrinkMusicDetails {...mockProps} />);
        
    //     // Assuming DeezerWidget uses the 'data-testid' attribute for the trackId
    //     const deezerWidget = screen.getByTitle('deezer-widget');
    //     expect(deezerWidget).toBeInTheDocument();
    //     expect(deezerWidget).toHaveAttribute('trackId', mockProps.trackId);
    //   });

    it('renders DeezerWidget with correct track URL', () => {
        render(<DrinkMusicDetails {...mockProps} />);
        
        const deezerIframe = screen.getByTitle('deezer-widget');
        expect(deezerIframe).toBeInTheDocument();
        expect(deezerIframe).toHaveAttribute('src', `https://widget.deezer.com/widget/dark/track/${mockProps.trackId}`);
      });
    
      it('renders DeezerWidget with default track URL when trackId is not provided', () => {
        const newMockProps = { ...mockProps, trackId: '' };
        render(<DrinkMusicDetails {...newMockProps} />);
        
        const deezerIframe = screen.getByTitle('deezer-widget');
        expect(deezerIframe).toBeInTheDocument();
        expect(deezerIframe).toHaveAttribute('src', 'https://widget.deezer.com/widget/dark/track/3135556');
      });

});
  