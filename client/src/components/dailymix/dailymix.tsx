import { useEffect, useState } from "react";
import DrinkMusicDetails from "../drink_music_details/drink_music_details";

type DailyMixProps = {
  strDrink: string;
  ingredients: string[];
  measures: string[];
  strInstructions: string;
  strDrinkThumb: string;
  trackId: string;
};

const DailyMix: React.FC = () => {
  const [dailymix, setDailymix] = useState<DailyMixProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/randomCocktailSong"
        );
        console.log("Response status", response.status);
        const data = await response.json();
        setDailymix(data);
      } catch (error) {
        console.log("Error loading random cocktail", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="daily-mix">
      {dailymix && <DrinkMusicDetails {...dailymix} />}
    </div>
  );
};

export default DailyMix;
