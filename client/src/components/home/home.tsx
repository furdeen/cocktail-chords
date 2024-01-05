import { useEffect, useState } from "react";
import "./home.css";

type HomeProps = {
  strDrinkThumb: string;
};

const Home: React.FC = () => {
  const [randomPhotos, setRandomPhotos] = useState<HomeProps[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await Promise.all([
        fetch("http://localhost:8080/api/randomCocktail"),
        fetch("http://localhost:8080/api/randomCocktail"),
        fetch("http://localhost:8080/api/randomCocktail"),
        fetch("http://localhost:8080/api/randomCocktail"),
      ]);

      const data = await Promise.all(
        response.map((response) => response.json())
      );
      // console.log("Response status", response.status);
      setRandomPhotos(data);
      setLoading(false);
    } catch (error) {
      console.log("Error loading cocktail image", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="main-header">Welcome</h1>
      <section className="home__text">
        Discover the Cocktail of the Day - enjoy a randomly selected cocktail
        paired with a matching song. Alternatively, select your preferred
        cocktail, and we'll find the ideal music to complement your choice.
      </section>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="home__image-box">
          {randomPhotos.map((photo, index) => (
            <img
              key={index}
              className="home__img"
              src={photo.strDrinkThumb}
              alt={photo.strDrinkThumb}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
