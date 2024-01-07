
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import Router from './router'; // Adjust the import path to your Router component

describe('Router', () => {

    test('renders DailyMix component on /dailymix path', () => {
        render(
        <MemoryRouter initialEntries={['/dailymix']}>
            <Router />
        </MemoryRouter>
        );
        // Assert
        expect(screen.getByTestId('daily-mix')).toBeInTheDocument();
    });

    //MusicMix
    test('renders MusicMix component on /musicmix path', () => {
        render(
        <MemoryRouter initialEntries={['/musicmix']}>
            <Router />
        </MemoryRouter>
        );
        // Assert
        expect(screen.getByTestId('music-mix')).toBeInTheDocument();
    });

});
