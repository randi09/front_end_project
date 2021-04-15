const byartist = async (song) => {
  const album = await fetch(
    `http://ws.audioscrobbler.com//2.0/?method=artist.gettoptracks&artist=${song}&api_key=90a50789c73087ffcd11cb040d793b8e&format=json`
  );
  const convertedJson = await album.json();
  console.log(convertedJson);
};

const button1 = document.querySelector("#homebutton");
const searchBar1 = document.querySelector(".searchbar1");
button1.addEventListener("click", (e) => {
  const value = searchBar1.value;
  e.preventDefault();

  byartist(value);
});
