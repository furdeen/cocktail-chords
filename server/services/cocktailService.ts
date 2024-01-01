//This defines the shape of the returned data, further properties can be added as needed
interface CocktailApiResponse {
  drinks: {
    idDrink: string;
    strDrink: string;
    strInstructions: string;
    strDrinkThumb: string;
  }[];
}

export async function fetchCocktailByIdData(id: number): Promise<{
  idDrink: string;
  strDrink: string;
  strInstructions: string;
  strDrinkThumb: string;
} | null> {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
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
