import { useEffect, useState } from "react";
import "./home.css";

type HomeProps = {
  strDrinkThumb: string;
};

const Home: React.FC = () => {
  const [randomPhotos, setRandomPhotos] = useState<HomeProps[]>([]);

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
    } catch (error) {
      console.log("Error loading cocktail image", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Welcome</h1>
      <main></main>
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
    </>
  );
};

export default Home;
