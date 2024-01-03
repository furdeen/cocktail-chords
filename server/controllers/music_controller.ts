import { Request, Response } from "express";

import { Genre } from "../types/music.types";

export const getGenre = async (req: Request, res: Response) => {
  try {
    const result = await fetch("https://api.deezer.com/genre");
    const deezerGenres = await result.json();
    const shapeGenres = deezerGenres.data.map((genre: Genre) => ({
      id: genre.id,
      name: genre.name,
      picture: genre.picture,
    }));
    res.json(shapeGenres).status(200);
  } catch (error) {
    console.log(error);
  }
};

export const getArtist = async (req: Request, res: Response) => {
  try {
    const id: number = 132;
    const result = await fetch(`https://api.deezer.com/genre/${id}/artists`);
    const data = await result.json();
    res.json(data).status(200);
  } catch (error) {
    console.log(error);
  }
};

export const searchRandomSong = async (req: Request, res: Response) => {
  const { ingredient } = req.query;
  // Fetch cocktails based on the selected ingredient
  const cocktailResponse = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const cocktails = await cocktailResponse.json();

  // Extract the first cocktail's name to use as the search query for Deezer
  const cocktailName = cocktails.length > 0 ? cocktails[0].strDrink : "";

  // Use the cocktail name as the search query for Deezer
  const queryParams = new URLSearchParams({
    q: cocktailName,
  });

  const deezerResponse = await fetch(
    `https://api.deezer.com/search?q=${queryParams}`
  );
  const deezerData = await deezerResponse.json();

  console.log(deezerData);

  res.json(deezerData);
};
