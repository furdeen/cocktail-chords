import { Request, Response } from "express";

import { Genre } from "../types/music.types";
import { link } from "fs";
import * as MusicService from "../services/musicService";

export const getRandomTrack = async (req: Request, res: Response) => {
  try {
    const randomTrack = await MusicService.getTrackById();

    if (randomTrack) {
      res.json(randomTrack).status(200);
    } else {
      res.status(404).json();
    }
  } catch (error) {
    console.log("there has been an error getting the id's", error);
  }
};
