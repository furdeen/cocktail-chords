import * as express from "express";
import * as cors from "cors";
import { Server } from "http";
import { initialiseRoutes } from "./routes/routes";
import { printNewLine } from "./helpers/helpers";

const app = express();
const PORT = 8080;

console.log("💫 Initialising Server...");
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

// // // Set up middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// // Add other middlewares as needed


 printNewLine();


// // //const app = express();

console.log("👉 Enabling JSON middleware...");
app.use(express.json());

console.log("👉 Enabling URL-Encoded middleware...");
app.use(express.urlencoded({ extended: true }));

console.log("👉 Enabling CORS...");
app.use(cors());

initialiseRoutes(app);

// Initialise routes
//initialiseRoutes(app);

 export default app;