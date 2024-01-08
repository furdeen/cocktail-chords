import { Artist, Genre } from "../types/music.types";

export async function fetchRandomSong(queryParams: string) {
  const deezerResponse = await fetch(
    `https://api.deezer.com/search?q=${queryParams}`
  );
  const deezerData = await deezerResponse.json();
  let randomTrack: number;

  let randomSongArray: number[] = [
    144393668, 134527024, 2535353, 416942782, 142986206, 13651702, 6461440,
    916427, 9997018, 908604612,
  ];

  if (!deezerResponse.ok) {
    return (randomTrack = 2535353);
  }

  if (deezerData) {
    const tracks = deezerData.data;

    const totalTracks = tracks.length;

    //if the keyword does not return any tracks, the length will be 0
    // this returns the default value if that is the case
    if (totalTracks === 0) {
      randomTrack = Math.floor(Math.random() * randomSongArray.length);
      console.log(randomTrack);
      return randomSongArray[randomTrack];
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

    const ShapedArtistsIds = deezerAPI.data.map((artist: Artist) => artist.id);

    const randomArtist = getRandomElement(ShapedArtistsIds);

    if (randomArtist) {
      const artistDetailsResult = await fetch(
        `https://api.deezer.com/artist/${randomArtist}/top?limit=50`
      );

      const artistDetails = await artistDetailsResult.json();

      const shapedTracks = artistDetails.data.map((track: Artist) => track.id);

      const randomTrack = getRandomElement(shapedTracks);

      return randomTrack;
    } else {
      let randomTrack: number = 2535353;

      return randomTrack;
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
