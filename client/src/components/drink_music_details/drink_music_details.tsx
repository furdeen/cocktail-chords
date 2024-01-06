import DeezerWidget from "../widgets/deezer_widget";
import "./drink_music_details.css";

export type DrinkMusicDetailsProps = {
  strDrink: string;
  ingredients: string[];
  measures: string[];
  strInstructions: string;
  strDrinkThumb: string;
  trackId: string;
};

const DrinkMusicDetails: React.FC<DrinkMusicDetailsProps> = ({
  strDrink,
  ingredients,
  measures,
  strInstructions,
  strDrinkThumb,
  trackId,
}) => {
  return (
    <div className="drink-music styled-overlay">
      <div className="drink-music__container">
        <h2 className="drink-music__title">{strDrink}</h2>
        <p className="drink-music__instructions">{strInstructions}</p>
        <div className="drink-music__ingredients">
          <h3 className="drink-music__ingredients-header">Ingredients</h3>
          <ul className="drink-music__ingredients-list">
            {ingredients.map((ingredient, index) => (
              <li className="drink-music__ingredients-list-item" key={index}>
                {ingredient} - {measures[index]}
              </li>
            ))}
          </ul>
        </div>
        <img className="drink-music__img" src={strDrinkThumb} alt={strDrink} />
      </div>

      <DeezerWidget trackId={trackId} />
    </div>
  );
};

export default DrinkMusicDetails;
