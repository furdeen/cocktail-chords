import { useEffect, useState } from "react";

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
  beer: "Beer Necessity",
  "Soft Drink": "Soft Sip",
};

type Drink = {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
};

const MusicMix: React.FC = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = async (category: string) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/cocktailsByCategory/${category}`
      );
      if (!response.ok) {
        throw new Error("Network response not good");
      }
      const data = await response.json();
      setDrinks(data);
      setSelectedCategory(category);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  // useEffect(() => {
  // },[]);

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
        <img
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          className="musicmix__drinks-img"
        />
        <p>{drink.strDrink}</p>
      </li>
    ));
  };

  return (
    <div>
      <h1>Music Mix</h1>
      <p>Choose your cocktail and we will match it with the perfect music</p>

      <ul className="music-mix__category">{categoryLinks}</ul>

      {selectedCategory && (
        <div className="music-mix__drinks">
          <h3 className="music-mix__drinks-title">
            {categoryMapping[selectedCategory as keyof typeof categoryMapping]}
          </h3>
          <ul className="music-mix__drinks-list">{renderDrinks()}</ul>
        </div>
      )}
    </div>
  );
};

export default MusicMix;
