import { useState } from "react";
import DrinkMusicDetails, {
  DrinkMusicDetailsProps,
} from "../drink_music_details/drink_music_details";
import "./musicmix.css";

const categoryMapping = {
  "Ordinary Drink": "Standard Splash",
  Cocktail: "Cocktail Creations",
  Shake: "Shake It Up",
  "Other / Unknown": "Mystery Mix",
  Cocoa: "Cocoa Comfort",
  Shot: "Snap Shot",
  "Coffee / Tea": "Brew Harmony",
  "Homemade Liqueur": "DIY Spirit",
  "Punch / Party Drink": "Party Potion",
  Beer: "Beer Necessity",
  "Soft Drink": "Soft Sip",
  "Non alcoholic": "Non alcoholic",
  "Optional alcohol": "Optional alcohol",
};

type Drink = {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
};

const MusicMix: React.FC = () => {
  const [selectedDrink, setSelectedDrink] =
    useState<DrinkMusicDetailsProps | null>(null);
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = async (category: string) => {
    try {
      const categoryTest = encodeURIComponent(category);
      const response = await fetch(
        `http://localhost:8080/api/cocktailsByCategory/${categoryTest}`
      );
      if (!response.ok) {
        throw new Error("Error fetching category");
      }
      const data = await response.json();
      setDrinks(data);
      setSelectedCategory(category);
      setSelectedDrink(null);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleDrinkItemClick = async (idDrink: string) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/CategoryCocktailSong/${idDrink}`
      );
      if (!response.ok) {
        throw new Error("Error fetching drink:");
      }
      const data = await response.json();
      setSelectedCategory(null);
      setSelectedDrink(data);
    } catch (error) {
      console.log("Error fetching id for drink and music data:", error);
    }
  };

  const categoryLinks = Object.keys(categoryMapping).map((category, index) => (
    <a
      key={index}
      className="music-mix__category-link"
      href="#"
      onClick={() => handleCategoryClick(category)}
    >
      <li className="music-mix__category-item">
        {categoryMapping[category as keyof typeof categoryMapping]}
      </li>
    </a>
  ));

  const renderDrinks = () => {
    return drinks.map((drink) => (
      <li key={drink.idDrink} className="music-mix__drinks-list-item">
        <a
          href="#"
          onClick={() => handleDrinkItemClick(drink.idDrink)}
          className="music-mix__drink-link"
        >
          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            className="musicmix__drinks-img"
          />
          <p>{drink.strDrink}</p>
        </a>
      </li>
    ));
  };

  return (
    <>
      <h1 className="main-header">Chord &amp; Mix Matchmaker</h1>
      <section className="music-mix__text styled-overlay">
        You select your cocktail and we'll choose the perfect tune to accompany
        it.
      </section>

      <ul className="music-mix__category">{categoryLinks}</ul>

      {selectedDrink && <DrinkMusicDetails {...selectedDrink} />}

      {selectedCategory && (
        <div className="music-mix__drinks">
          <h3 className="music-mix__drinks-title">
            {categoryMapping[selectedCategory as keyof typeof categoryMapping]}
          </h3>
          <ul className="music-mix__drinks-list">{renderDrinks()}</ul>
        </div>
      )}
    </>
  );
};

export default MusicMix;
