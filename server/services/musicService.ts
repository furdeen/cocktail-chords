export async function fetchRandomSong(queryParams: string) {
  const deezerResponse = await fetch(
    `https://api.deezer.com/search?q=${queryParams}`
  );
  const deezerData = await deezerResponse.json();
  let randomTrack: number | undefined;

  if (!deezerResponse.ok) {
    return (randomTrack = 2535353);
  }

  if (deezerData) {
    const tracks = deezerData.data;
    console.log("dezzerlength", tracks.length);
    const totalTracks = tracks.length;

    if (totalTracks > 0) {
      randomTrack = Math.floor(Math.random() * totalTracks);
    }

    return tracks[randomTrack].id;
  }
}
