// import * as express from "express";
// import * as cors from "cors";
// import { Server } from "http";
//  import { initialiseRoutes } from "./routes/routes";
//  import { printNewLine } from "./helpers/helpers";

// const app = express();

// // Set up middlewares
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// // Add other middlewares as needed

// // Initialise routes
// initialiseRoutes(app);

// export default app;

//import * as express from "express";
import express from "express";
import { initialiseRoutes } from "../routes/routes";
// other imports...

const app = express();

// Middleware setup...
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// etc...

// Initialise routes
initialiseRoutes(app);

// Export the app for testing purposes
export default app;