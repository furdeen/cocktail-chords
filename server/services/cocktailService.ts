import { isAbsolute } from "path/posix";
import {
  DrinkObject,
  CocktailApiResponse,
  Cocktail,
} from "../types/cocktail.types";
import { getIngredientsArray, getMeasuresArray } from "./cocktail-helpers";

export async function fetchCocktailByIdData(
  id: number
): Promise<DrinkObject | undefined> {
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

    return undefined;
  } catch (error) {
    console.error("Error fetching cocktail data:", error);
    return undefined;
  }
}

export async function fetchRandomCocktailData(): Promise<
  DrinkObject | undefined
> {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/random.php`
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
      const randomCocktail: DrinkObject = {
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
      return randomCocktail;
    }
    return undefined;
  } catch (error) {
    console.error("Error fetching cocktail data:", error);
    return undefined;
  }
}

export async function fetchCocktailsByCategory(
  requestParam: string
): Promise<Array<Cocktail> | undefined> {
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

    return undefined;
  } catch (error) {
    console.error("Error fetching cocktail data:", error);
    return undefined;
  }
}
