import express from 'express';
// ... other imports ...

const app = express();
// ... your middleware and routes setup ...

if (process.env.NODE_ENV !== 'test') {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  }
  
export default app;