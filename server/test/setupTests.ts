// Example setupTests.ts file

// Mocking a global fetch, if necessary
// global.fetch = jest.fn(() => Promise.resolve({
//     json: () => Promise.resolve({}),
//   }));
  
  // Set up environment variables
  process.env.TEST_VARIABLE = 'test';
  