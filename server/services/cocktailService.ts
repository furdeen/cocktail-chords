import { isAbsolute } from "path/posix";
import {
  DrinkObject,
  CocktailApiResponse,
  MeasureIngredients,
  Cocktail,
  CocktailMusic,
} from "../types/cocktail.types";
import { getIngredientsArray, getMeasuresArray } from "./cocktail-helpers";
import { fetchRandomSong, getTrackById } from "./musicService";
import { getMappedGenre } from "./utility-functions";

export async function fetchCocktailByIdData(
  id: number
): Promise<DrinkObject | null> {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData: CocktailApiResponse = await response.json();
    if (responseData) {
      const cocktailDrink = responseData.drinks;

      const {
        idDrink,
        strDrink,
        strCategory,
        strAlcoholic,
        strGlass,
        strInstructions,
        strDrinkThumb,
      } = cocktailDrink[0];

      //filter out null values and place ingredients in an array
      const ingredientsArray = getIngredientsArray(cocktailDrink);

      //filter out null values and place measures in an array
      const measuresArray = getMeasuresArray(cocktailDrink);

      //create return object
      const returnObject: DrinkObject = {
        idDrink: idDrink,
        strDrink: strDrink,
        strCategory: strCategory,
        strAlcoholic: strAlcoholic,
        strGlass: strGlass,
        strInstructions: strInstructions,
        strDrinkThumb: strDrinkThumb,
        ingredients: ingredientsArray,
        measures: measuresArray,
      };

      return returnObject;
    }

    return null;
  } catch (error) {
    console.error("Error fetching cocktail data:", error);
    return null;
  }
}

export async function fetchRandomCocktailData(): Promise<{
  idDrink: string;
  strDrink: string;
  strInstructions: string;
  strDrinkThumb: string;
} | null> {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData: CocktailApiResponse = await response.json();

    const cocktailDrink = responseData.drinks;

    if (cocktailDrink) {
      const { idDrink, strDrink, strInstructions, strDrinkThumb } =
        cocktailDrink[0];
      return { idDrink, strDrink, strInstructions, strDrinkThumb };
    }

    return null;
  } catch (error) {
    console.error("Error fetching cocktail data:", error);
    return null;
  }
}

export async function fetchCocktailsByCategory(
  requestParam: string
): Promise<Array<Cocktail> | null> {
  try {
    let apiUrl: string;
    const categoryParam = encodeURIComponent(requestParam);

    if (
      requestParam === "Non alcoholic" ||
      requestParam === "Optional alcohol"
    ) {
      apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${requestParam}`;
    } else {
      apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryParam}`;
    }

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = (await response.json()) as { drinks: Cocktail[] };

    const shapedData: Array<Cocktail> = responseData.drinks;

    if (responseData) {
      return shapedData;
    }

    return null;
  } catch (error) {
    console.error("Error fetching cocktail data:", error);
    return null;
  }
}
