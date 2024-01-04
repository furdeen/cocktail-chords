import DeezerWidget from "../widgets/deezer_widget";

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
    <div className="drink-music__container">
      <div className="daily-mix__container">
        <h2 className="daily-mix__title">{strDrink}</h2>
        <p className="daily-mix__instructions">{strInstructions}</p>
        <div className="daily-mix__ingredients">
          <h3>Ingredients</h3>
          <ul className="daily-mix__ingredients-list">
            {ingredients.map((ingredient, index) => (
              <li className="daily-mix__ingredients-list-item" key={index}>
                {ingredient} - {measures[index]}
              </li>
            ))}
          </ul>
        </div>
        <img className="daily-mix__img" src={strDrinkThumb} alt={strDrink} />
      </div>

      <DeezerWidget trackId={trackId} />
    </div>
  );
};

export default DrinkMusicDetails;
