import request from 'supertest';
import app from './dummyServer.ts';  // Replace with the correct relative path

describe('GET /cocktailById/:id', () => {
  it('should return cocktail data for a valid ID', async () => {
    const validId = 1; // Example valid ID
    const response = await request(app)
      .get(`/cocktailById/${validId}`)   //need json but getting html
      .expect('Content-Type', /json/)
      .expect(200);

    // Assertions based on your response structure
  });

  // ... other tests ...
});