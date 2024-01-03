import { MeasureIngredients } from "../types/cocktail.types";

export function getIngredientsArray(
  ingredientsObject: MeasureIngredients[]
): string[] {
  if (ingredientsObject.length === 0) {
    return [];
  }

  return Object.keys(ingredientsObject[0])
    .filter(
      (key) =>
        key.startsWith("strIngredient") && ingredientsObject[0][key] !== null
    )
    .map((key) => ingredientsObject[0][key] as string);
}

export function getMeasuresArray(
  measuresObject: MeasureIngredients[]
): string[] {
  if (measuresObject.length === 0) {
    return [];
  }

  return Object.keys(measuresObject[0])
    .filter(
      (key) => key.startsWith("strMeasure") && measuresObject[0][key] !== null
    )
    .map((key) => measuresObject[0][key] as string);
}
