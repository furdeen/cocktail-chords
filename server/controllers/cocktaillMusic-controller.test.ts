import request from 'supertest';
import { describe, it, expect } from 'vitest';
//import app from '../app';
import app from '../controllers/dummyServer';


describe('Cocktail Music Service API Integration Tests', () => {

  it('GET /api/random-cocktail-song', async () => {
    const response = await request(app).get('/api/randomCocktailSong');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined(); });

    it('GET /random-cocktail-song - not found', async () => {
      const response = await request(app).get('/randomCocktailSong');
      expect(response.status).toBe(404);
    });

    it('GET /categoryCocktailSong/:id - success', async () => {
      const testId = 15106; // Replace with a valid test ID ///api/categoryCocktailSong/11007
      const response = await request(app).get(`/api/categoryCocktailSong/11007`);
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
    });

    it('GET /category-cocktail-song/:id - invalid id', async () => {
     // const invalidId = 'abc'; // An invalid ID to test error handling
      const response = await request(app).get(`/api/categoryCocktailSong/{anyThingbutNotNumber}`);
      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty('message', 'Invalid cocktail Id');
    });
});

