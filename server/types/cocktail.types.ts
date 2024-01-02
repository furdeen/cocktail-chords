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
}

export interface RandomCocktail {
  idDrink: string;
  strDrink: string;
  strInstructions: string;
  strDrinkThumb: string;
}
