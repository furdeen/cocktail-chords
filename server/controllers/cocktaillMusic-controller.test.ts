import request from 'supertest';
import * as cocktailController from '../controllers/cocktailMusic-controller';
import { describe, it, expect, vi } from 'vitest';
 import app from '../controllers/dummyServer';

import * as cocktailMusicController from '../controllers/cocktailMusic-controller';

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
      const response = await request(app).get(`/api/categoryCocktailSong/11007`);
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
    });

    it('GET /category-cocktail-song/:id - invalid id', async () => {

      const response = await request(app).get(`/api/categoryCocktailSong/{anyThingbutNotNumber}`);
      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty('message', 'Invalid cocktail Id');
    });
});

//import { Request, Response } from 'express';

//unit test for CocktailMusic-controller
describe('Cocktail Controller Tests', () => {
  it('getCocktailByIdData returns 500 for invalid ID', async () => {
    // Setup with a  invalid numeric ID
    const nonExistentIdReq = { params: { id: 'NaN' } };  
    const sendMock = vi.fn();
    const statusMock = vi.fn(() => ({ send: sendMock }));
    const res = { status: statusMock, send: sendMock };

    await cocktailController.getCategoryCocktailSong(nonExistentIdReq, res);

    // Assertions for not found response
    expect(statusMock).toHaveBeenCalledWith(500); // Check if status 404 was called
    expect(sendMock).toHaveBeenCalled(); // Check if send was called
  });

  it('getCocktailByIdData returns 404 for non-existent ID', async () => {
    // Setup with a non-existent but valid numeric ID
    const nonExistentIdReq = { params: { id: 112353 } }; // Replace with a non-existent ID
    const jsonMock = vi.fn();
    const statusMock = vi.fn(() => ({ json: jsonMock }));
    const res = { status: statusMock, json: jsonMock };

    await cocktailController. getCategoryCocktailSong(nonExistentIdReq, res);

    // Assertions for not found response
    expect(statusMock).toHaveBeenCalledWith(404); // Check if status 404 was called
    expect(jsonMock).toHaveBeenCalled(); // Check if json was called
  });
});

describe('Cocktail Controller Tests', () => {
  it('getCocktailByIdData returns 200 for valid ID', async () => {
    // Setup with an existing and valid numeric ID
    const validIdReq = { params: { id: 11007 } }; // Replace with an existing valid ID
    const sendMock = vi.fn();
    const jsonMock = vi.fn();
    const statusMock = vi.fn(() => ({ json: jsonMock, send: sendMock }));
    const res = { status: statusMock, json: jsonMock, send: sendMock };

    await cocktailController.getCategoryCocktailSong(validIdReq, res);

    // Assertions for successful response
    expect(statusMock).toHaveBeenCalledWith(200); // Check if status 200 was called
    expect(jsonMock).toHaveBeenCalled(); // Check if json was called
    
  });

});

