import { Genre } from "../types/music.types";

export async function fetchRandomSong(queryParams: string) {
  const deezerResponse = await fetch(
    `https://api.deezer.com/search?q=${queryParams}`
  );
  const deezerData = await deezerResponse.json();
  let randomTrack: number;

  if (!deezerResponse.ok) {
    return (randomTrack = 2535353);
  }

  if (deezerData) {
    const tracks = deezerData.data;

    const totalTracks = tracks.length;

    //if the keyword does not return any tracks, the length will be 0
    // this returns the default value if that is the case
    if (totalTracks === 0) {
      return (randomTrack = 2535353);
    }

    if (totalTracks > 0) {
      randomTrack = Math.floor(Math.random() * totalTracks);
      return tracks[randomTrack].id;
    }
  }
}

export const getTrackById = async (genreParam: number) => {
  try {
    const result = await fetch(
      `https://api.deezer.com/genre/${genreParam}/artists`
    );
    const deezerAPI = await result.json();

    const ShapedArtistsIds = deezerAPI.data.map((artist) => artist.id);

    const randomArtist = getRandomElement(ShapedArtistsIds);
    console.log(randomArtist);
    if (randomArtist !== undefined) {
      const artistDetailsResult = await fetch(
        `https://api.deezer.com/artist/${randomArtist}/top?limit=50`
      );

      const artistDetails = await artistDetailsResult.json();

      console.log("what is the issue: ", artistDetails);

      const shapedTracks = artistDetails.data.map((track) => track.id);

      const randomTrack = getRandomElement(shapedTracks);

      console.log(randomTrack, "test");

      return randomTrack;
    } else {
      console.log("error, track has not been found!");
    }
  } catch (error) {
    console.log("there has been an error getting the id's", error);
  }
};

function getRandomElement(array: []) {
  if (array.length === 0) {
    return undefined;
  }
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
}
