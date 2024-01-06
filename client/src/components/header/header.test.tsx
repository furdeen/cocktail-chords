
import { render,fireEvent,screen } from '@testing-library/react';
import Header from './header';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
describe('Header Component', () => {
    const renderWithRouter = (ui, { route = '/' } = {}) => {
      window.history.pushState({}, 'Test page', route)
      return render(ui, { wrapper: Router });
    };
  
    it('renders header with logo and nav toggle', () => {
      renderWithRouter(<Header />)
    });
  
    it('toggles navigation on nav toggle click', () => {
      renderWithRouter(<Header />);
    });
  
    it('navigation menu is initially hidden', () => {
        renderWithRouter(<Header />);
        const headerNav = screen.getByRole('navigation');
        expect(headerNav).not.toHaveClass('header__nav--visible');
      });
      it('renders navigation links', () => {
        renderWithRouter(<Header />);
   
        const homeLink = screen.getByText(/home/i);
        expect(homeLink).toBeInTheDocument();
        // Add assertions for other links as needed,we can add more links here
      });
    
      it('hides navigation menu on link click', () => {
        renderWithRouter(<Header />);
        const navToggle = screen.getByLabelText(/☰/i);
        fireEvent.click(navToggle);
    
        
      });
});




// for team help , will be remove later

/*
I added a renderWithRouter helper function that wraps the component in a Router context,
 which is necessary for components that use react-router-dom functionalities.
The renderWithRouter function also allows you to set a custom route if needed for the test.
*/