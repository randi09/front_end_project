const getalbum = async (album) => {
  const getTopAlbums = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${album}&api_key=90a50789c73087ffcd11cb040d793b8e&format=json`
  );
  const convertedJson = await getTopAlbums.json();
  const albums = convertedJson.results.albummatches.album;
  for (let a of albums) {
    const albumtext = document.querySelector(".albumtext");
    const ullist = document.createElement("ul");
    const list = document.createElement("li");
    const image = document.createElement("img");
    image.src = a.image[2]["#text"];
    albumtext.append(ullist, image);
    ullist.append(list);
    list.append(a.name);
  }
};

const button = document.querySelector("#albumsbutton");
const searchBar = document.querySelector(".searchbar1");
button.addEventListener("click", (e) => {
  const newvalue = searchBar.value;
  e.preventDefault();
  getalbum(newvalue);
});
