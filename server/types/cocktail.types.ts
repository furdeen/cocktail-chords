export interface CocktailApiResponse {
  drinks: {
    idDrink: string;
    strDrink: string;
    strInstructions: string;
    strDrinkThumb: string;
    strCategory: string;
    strAlcoholic: string;
    strGlass: string;
  }[];
}

export interface Cocktail {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

export interface MeasureIngredients {
  [key: string]: string | null;
}

export interface DrinkObject {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  ingredients: Array<string>;
  measures: Array<string>;
  //musicGenreId: number;
}

export interface RandomCocktail {
  idDrink: string;
  strDrink: string;
  strInstructions: string;
  strDrinkThumb: string;
}

export type DrinksCategory =
  | "Ordinary Drink"
  | "Cocktail"
  | "Shake"
  | "Other / Unknown"
  | "Cocoa"
  | "Shot"
  | "Coffee / Tea"
  | "Homemade Liqueur"
  | "Punch / Party Drink"
  | "Beer"
  | "Soft Drink"
  | "Non alcoholic"
  | "Optional alcohol";

//checks whether received category query parameter is valid
export const isValidCategory = (
  category: string
): category is DrinksCategory => {
  const validDrinkCategories: DrinksCategory[] = [
    "Ordinary Drink",
    "Cocktail",
    "Shake",
    "Other / Unknown",
    "Cocoa",
    "Shot",
    "Coffee / Tea",
    "Homemade Liqueur",
    "Punch / Party Drink",
    "Beer",
    "Soft Drink",
    "Non alcoholic",
    "Optional alcohol",
  ];

  return validDrinkCategories.includes(category as DrinksCategory);
};
