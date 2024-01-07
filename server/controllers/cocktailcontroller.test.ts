import { describe, it, expect, vi } from 'vitest';
import * as cocktailController from '../controllers/cocktailcontroller';

describe('Cocktail Controller Tests', () => {
  it('getCocktailByIdData returns 500 for invalid ID', async () => {
    // Setup with a  invalid numeric ID
    const nonExistentIdReq = { params: { id: 'NaN' } };  
    const sendMock = vi.fn();
    const statusMock = vi.fn(() => ({ send: sendMock }));
    const res = { status: statusMock, send: sendMock };

    await cocktailController.getCocktailByIdData(nonExistentIdReq, res);

    // Assertions for not found response
    expect(statusMock).toHaveBeenCalledWith(500); // Check if status 404 was called
    expect(sendMock).toHaveBeenCalled(); // Check if send was called
  });

  // case for non-existent id
  it('getCocktailByIdData returns 404 for non-existent ID', async () => {
    // Setup with a non-existent but valid numeric ID
    const nonExistentIdReq = { params: { id: 112353 } }; // Replace with a non-existent ID
    const jsonMock = vi.fn();
    const statusMock = vi.fn(() => ({ json: jsonMock }));
    const res = { status: statusMock, json: jsonMock };

    await cocktailController.getCocktailByIdData(nonExistentIdReq, res);

    // Assertions for not found response
    expect(statusMock).toHaveBeenCalledWith(404); // Check if status 404 was called
    expect(jsonMock).toHaveBeenCalled(); // Check if json was called
  });

});

//test for valid id
describe('Cocktail Controller Tests', () => {
  it('getCocktailByIdData returns 200 for valid ID', async () => {
    // Setup with an existing and valid numeric ID
    const validIdReq = { params: { id: 11007 } }; // Replace with an existing valid ID
    const sendMock = vi.fn();
    const jsonMock = vi.fn();
    const statusMock = vi.fn(() => ({ json: jsonMock, send: sendMock }));
    const res = { status: statusMock, json: jsonMock, send: sendMock };

    await cocktailController.getCocktailByIdData(validIdReq, res);

    // Assertions for successful response
    expect(statusMock).toHaveBeenCalledWith(200); // Check if status 200 was called
    expect(jsonMock).toHaveBeenCalled(); // Check if json was called
    // If your controller uses send instead of json, replace the above line with:
    // expect(sendMock).toHaveBeenCalled();
  });

  // Add more tests as needed...
});