import { useEffect, useState } from "react";
import DeezerWidget from "../widgets/deezer_widget";

type DailyMixProps = {
  strDrink: string;
  ingredients: string[];
  measures: string[];
  strInstructions: string;
  strDrinkThumb: string;
};

const DailyMix: React.FC = () => {
  const [dailymix, setDailymix] = useState<DailyMixProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/randomCocktail"
        );
        const data = await response.json();
        setDailymix(data);
      } catch (error) {
        // Handle error
        console.log("Error loading random cocktail");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="daily-mix">
      {dailymix && (
        <div className="daily-mix__container">
          <h2 className="daily-mix__title">{dailymix.strDrink}</h2>
          <p className="daily-mix__instructions">{dailymix.strInstructions}</p>
          <div className="daily-mix__ingredients">
            <h3>Ingredients</h3>
            <ul className="daily-mix__ingredients-list">
              {dailymix.ingredients.map((ingredient, index) => (
                <li className="daily-mix__ingredients-list-item" key={index}>
                  {ingredient} - {dailymix.measures[index]}
                </li>
              ))}
            </ul>
          </div>
          <img
            className="daily-mix__img"
            src={dailymix.strDrinkThumb}
            alt={dailymix.strDrink}
          />
        </div>
      )}
      <DeezerWidget trackId="3159453" />
    </div>
  );
};

export default DailyMix;
