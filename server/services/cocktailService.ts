import {
  DrinkObject,
  CocktailApiResponse,
  MeasureIngredients,
} from "../types/cocktail.types";

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
      const ingredientsObject: MeasureIngredients[] = cocktailDrink;
      const ingredientsArray: string[] = Object.keys(ingredientsObject[0])
        .filter(
          (key) =>
            key.startsWith("strIngredient") &&
            ingredientsObject[0][key] !== null
        )
        .map((key) => ingredientsObject[0][key] as string);

      //filter out null values and place measures in an array
      const measuresObject: MeasureIngredients[] = cocktailDrink;
      const measuresArray: string[] = Object.keys(measuresObject[0])
        .filter(
          (key) =>
            key.startsWith("strMeasure") && measuresObject[0][key] !== null
        )
        .map((key) => measuresObject[0][key] as string);

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
