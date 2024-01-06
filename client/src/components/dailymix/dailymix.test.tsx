import { render ,waitFor,screen} from '@testing-library/react';
import DailyMix from './dailymix';
import DeezerWidget from '../widgets/deezer_widget';

//just check rendering
test('renders DailyMix component without crashing', () => {
  render(<DailyMix />);
});

//API Call Made on Component Mount
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ }),
  })
);
test('API call is made on component mount', () => {
  render(<DailyMix />);
  expect(fetch).toHaveBeenCalledWith("http://localhost:8080/api/randomCocktailSong");
});


//Data Displayed After Fetching

test('data is displayed after fetching', async () => {
    const mockResponse = {
      strDrink: "The Evil Blue Thing",
      strInstructions: "Pour ingredients into glass, and drop in a blue whale!",
      ingredients: ["Creme de Cacao", "Blue Curacao", "Light rum"],
      measures: ["1 1/2 oz", "1 oz", "1/2 oz"],
      strDrinkThumb: "mock_image_url.jpg",
      trackId: "mock_track_id"
    };
  
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );
  
    render(<DailyMix />);
  
    await waitFor(() => {
      expect(screen.getByText("The Evil Blue Thing")).toBeInTheDocument();
      expect(screen.getByText("Pour ingredients into glass, and drop in a blue whale!")).toBeInTheDocument();
      expect(screen.getByText("Creme de Cacao - 1 1/2 oz")).toBeInTheDocument();
      // Add more expects as necessary for each piece of data
    });
  });


//error handling
test('error handling when API call fails', async () => {
    global.fetch = vi.fn(() => Promise.reject("API call failed"));
  
    render(<DailyMix />);
    
  });

//   //Create a snapshot test to ensure that future changes do not unintentionally alter the component's UI.
// describe('DailyMix Snapshot', () => {
//     it('should match snapshot', () => {
//       const { asFragment } = render(<DailyMix />);
//       expect(asFragment()).toMatchSnapshot();
//     });
//   });

//   // Mocking DeezerWidget with a default export
// vi.mock('../widgets/deezer_widget', () => ({
//     default: function DummyDeezerWidget(props) {
//       return <div data-testid="deezer-widget" {...props}></div>;
//     },
//   }));
  
//   describe('DailyMix Component', () => {
//     it('renders DeezerWidget when trackId is available', async () => {
//       const mockResponse = {
//         // ... other mock data
//         trackId: '1668848162',
//       };
  
//       // Mocking global fetch
//       global.fetch = vi.fn(() =>
//         Promise.resolve({
//           json: () => Promise.resolve(mockResponse),
//         })
//       );
  
//       render(<DailyMix />);
      
//       // Check if DeezerWidget is in the document with the correct trackId
//       const deezerWidget = await screen.findByTestId('deezer-widget');
//       expect(deezerWidget).toBeInTheDocument();
//       expect(deezerWidget).toHaveAttribute('trackId', '1668848162');
//     });
//   });



  