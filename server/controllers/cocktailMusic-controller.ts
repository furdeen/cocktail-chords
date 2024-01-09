import { Request, Response } from "express";

import * as CocktailMusicService from "../services/cocktailMusicService";

export async function getRandomCocktailSongData(req: Request, res: Response) {
  try {
    const cocktailData =
      await CocktailMusicService.fetchRandomCocktailSongData();

    if (cocktailData) {
      res.status(200).json(cocktailData);
    } else {
      res.status(404).json({ error: "Cocktail not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
}

export async function getCategoryCocktailSong(req: Request, res: Response) {
  console.log("inside getCategory");
  const id = req.params.id;
  const requestedId = Number.parseInt(id);
  if (Number.isNaN(requestedId)) {
    res.status(500).send({ message: "Invalid cocktail Id" });
    return;
  }
  try {
    const cocktailSongData =
      await CocktailMusicService.fetchCategoryCocktailSong(requestedId);

    if (cocktailSongData) {
      res.status(200).json(cocktailSongData);
    } else {
      res.status(404).json({ error: "Cocktail and track not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
}
