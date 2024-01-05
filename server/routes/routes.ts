import * as express from "express";
import { Express } from "express";
import * as cocktailController from "../controllers/cocktailcontroller";
import * as cocktailMusicController from "../controllers/cocktailMusic-controller";

export function initialiseRoutes(app: Express) {
  console.log("🏗️  Setting up routers...");

  addHealthCheck(app);

  addAPIRoutes(app);
}

function addHealthCheck(app: Express) {
  console.log("🛠️  Creating base router...");

  const baseRouter = express.Router();

  baseRouter.use((req, res, next) => {
    res.header("Access-Control-Allow-Methods", "GET");
    console.log(`📨 ${req.url}`);
    next();
  });

  console.log("🏠❤️‍🩹  Adding health check route...");
  baseRouter.get("/health", (req, res) => {
    res.status(200).send("👍 Okay! The server is responding! 🙌");
  });

  console.log("🛠️  Applying base router to Express server...");
  app.use("/", baseRouter);
}

// this function adds all the routes that can be accessed by going to /api/[someRoute]
function addAPIRoutes(app: Express) {
  console.log("🛠️  Creating API router...");

  const apiRouter = express.Router();
  apiRouter.use((req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    next();
  });

  //endpoint returns data for a single cocktail matching the id query parameter
  apiRouter.get("/cocktailById/:id", cocktailController.getCocktailByIdData);

  //endpoint returns data for a randomly selected cocktail
  apiRouter.get("/randomCocktail/", cocktailController.getRandomCocktailData);

  //endpoint returns cocktails in the category matching the category query parameter
  apiRouter.get(
    "/cocktailsByCategory/:category",
    cocktailController.getCocktailsByCategory
  );

  //endpoint returns a random cocktail and random song linked to the cocktail name
  apiRouter.get(
    "/randomCocktailSong/",
    cocktailMusicController.getRandomCocktailSongData
  );

  //endpoint returns user selected category cocktail with song track based on category and music genre mapping
  apiRouter.get(
    "/categoryCocktailSong/:id",
    cocktailMusicController.getCategoryCocktailSong
  );

  console.log("🛠️  Applying API router to Express server...");
  app.use("/api", apiRouter);
}
