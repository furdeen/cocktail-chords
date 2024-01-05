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

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/randomCocktailSong"
      );
      console.log("Response status", response.status);
      const data = await response.json();
      setDailymix(data);
      console.log("details: ", data);
    } catch (error) {
      console.log("Error loading random cocktail", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="main-header">Cocktail of the Day</h1>
      {dailymix && <DrinkMusicDetails {...dailymix} />}
    </>
  );
};

export default DailyMix;
