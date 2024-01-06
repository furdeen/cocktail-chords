import { CocktailMusic } from "../types/cocktail.types";

import { fetchRandomSong, getTrackById } from "./musicService";
import {
  fetchCocktailByIdData,
  fetchRandomCocktailData,
} from "./cocktailService";
import { getMappedGenre } from "./utility-functions";

export async function fetchRandomCocktailSongData(): Promise<
  CocktailMusic | undefined
> {
  try {
    const randomCocktail = await fetchRandomCocktailData();

    if (randomCocktail) {
      const musicTrack = await fetchRandomSong(randomCocktail.strDrink);

      //create return object
      const returnObject: CocktailMusic = {
        idDrink: randomCocktail.idDrink,
        strDrink: randomCocktail.strDrink,
        strCategory: randomCocktail.strCategory,
        strAlcoholic: randomCocktail.strAlcoholic,
        strGlass: randomCocktail.strGlass,
        strInstructions: randomCocktail.strInstructions,
        strDrinkThumb: randomCocktail.strDrinkThumb,
        ingredients: randomCocktail.ingredients,
        measures: randomCocktail.measures,
        trackId: musicTrack,
      };

      return returnObject;
    }
    console.error(`HTTP error!`);
    return undefined;
  } catch (error) {
    console.error("Error fetching cocktail data:", error);
    return undefined;
  }
}

export async function fetchCategoryCocktailSong(
  cocktailId: number
): Promise<CocktailMusic | null> {
  try {
    //Get cocktail data user selected from category page
    const cocktailData = await fetchCocktailByIdData(cocktailId);
    let trackId: number;
    if (!cocktailData) {
      console.error(`HTTP error!`);
      return null;
    }
    //Get music genre mapped to cocktail category
    const mappedGenre = getMappedGenre(cocktailData.strCategory);

    //Get music track from mapped music genre
    let musicData = await getTrackById(mappedGenre);

    //trackId = musicData;

    if (!musicData) musicData = 2535353;

    //add music track to cocktail data object
    const mergedData: CocktailMusic = {
      idDrink: cocktailData.idDrink,
      strDrink: cocktailData.strDrink,
      strCategory: cocktailData.strCategory,
      strAlcoholic: cocktailData.strAlcoholic,
      strGlass: cocktailData.strGlass,
      strInstructions: cocktailData.strInstructions,
      strDrinkThumb: cocktailData.strDrinkThumb,
      ingredients: cocktailData.ingredients,
      measures: cocktailData.measures,
      trackId: musicData,
    };

    return mergedData;
  } catch (error) {
    console.error("Error fetching cocktail data:", error);
    return null;
  }
}
