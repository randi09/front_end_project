const getbio = async (artist) => {
  const metadatabio = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=90a50789c73087ffcd11cb040d793b8e&format=json`
  );
  const convertedJson = await metadatabio.json();
  const bio = convertedJson.artist.bio.content;
  const images = convertedJson.artist.image[2];
  const biotext = document.querySelector(".biotext");
  biotext.innerHTML = bio;
};

const button = document.querySelector("#homebutton");
const searchBar = document.querySelector(".searchbar1");
button.addEventListener("click", (e) => {
  const newvalue = searchBar.value;
  e.preventDefault();
  getbio(newvalue);
});
