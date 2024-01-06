import { MusicGenre, DrinkGenres } from "../types/cocktail.types";

const musicMapping: DrinkGenres = {
  "Ordinary Drink": [132, 152, 197],
  Cocktail: [85, 106, 16],
  Shake: [144, 165],
  "Other / unknown": [169, 75],
  Cocoa: [153, 129, 98],
  Shot: [113, 116, 106, 197],
  "Coffee / Tea": [84, 466],
  "Homemade Liqueur": [169],
  "Punch / Party Drink": [152, 113, 16],
  Beer: [153, 152, 75],
  "Soft Drink": [2, 165, 173],
  "Non alcoholic": [98, 466, 95, 81],
  "Optional alcohol": [132, 113, 169],
};

export function getMappedGenre(cocktailCategory: string): number {
  const genres = musicMapping[cocktailCategory];

  const randomIndex = Math.floor(Math.random() * genres.length);
  return genres[randomIndex];
}
