const lyrics = async (lyric) => {
  const getLyrics = await fetch(
    `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/9ddeb7e5c65301fc8f11a587a503aca6`
  );
  const converted = await getLyrics.json();
  console.log(converted);
};
lyrics();
