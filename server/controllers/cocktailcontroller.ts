import { Request, Response } from "express";
import * as CocktailService from "../services/cocktailService";
import { RandomCocktail, isValidCategory } from "../types/cocktail.types";

export async function getCocktailByIdData(req: Request, res: Response) {
  const id = req.params.id;
  const requestedId = Number.parseInt(id);
  if (Number.isNaN(requestedId)) {
    res.status(500).send({ message: "Invalid cocktail Id" });
    return;
  }
  try {
    const cocktailData = await CocktailService.fetchCocktailByIdData(
      requestedId
    );

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

export async function getRandomCocktailData(req: Request, res: Response) {
  try {
    const cocktailData = await CocktailService.fetchRandomCocktailData();
    if (cocktailData !== null) {
      const randomCocktailObject: RandomCocktail = cocktailData;
      const randomCocktail = await CocktailService.fetchCocktailByIdData(
        Number(randomCocktailObject.idDrink)
      );
      if (randomCocktail) {
        res.status(200).json(randomCocktail);
      } else {
        res.status(404).json({ error: "Cocktail not found" });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
}

export async function getCocktailsByCategory(req: Request, res: Response) {
  console.log("inside controller");
  const requestParam = req.params.category;

  if (!isValidCategory(requestParam)) {
    res.status(500).send({ message: "Invalid cocktail category" });
    return;
  }
  try {
    const cocktailData = await CocktailService.fetchCocktailsByCategory(
      requestParam
    );

    if (cocktailData) {
      res.status(200).json(cocktailData);
    } else {
      res.status(404).json({ error: "Category not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
}

export async function getRandomCocktailSongData(req: Request, res: Response) {
  try {
    const cocktailData = await CocktailService.fetchRandomCocktailSongData();

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
