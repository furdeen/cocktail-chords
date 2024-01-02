import { Request, Response } from "express";
export const getGenre = async (req: Request, res: Response) => {
  try {
    const result = await fetch("https://api.deezer.com/genre");
    const test = await result.json();
    res.json(test).status(200);
  } catch (error) {
    console.log(error);
  }
};

export const getArtist = async (req: Request, res: Response) => {
  try {
    const id: number = 132;
    const result = await fetch(`https://api.deezer.com/genre/${id}/artists`);
    const test = await result.json();
    res.json(test).status(200);
  } catch (error) {
    console.log(error);
  }
};
