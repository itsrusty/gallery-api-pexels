// headers
document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded!");
  getDataImages();
});

const options = {
  method: "GET",
  headers: {
    Authorization: "563492ad6f917000010000015b9eafbdc1d1448b8501b30cc4f125b9",
    "X-RapidAPI-Key": "412db3ef3amsh34570af12688a46p18e413jsn53d1cb21cbb5",
    "X-RapidAPI-Host": "PexelsdimasV1.p.rapidapi.com",
  },
};

// DOM elements
const containerCards = document.querySelector(".container-cards");
const animationLoading = document.querySelector(".spinner");
const searchInput = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");

// API
const API =
  "https://pexelsdimasv1.p.rapidapi.com/v1/search?query=ocean&locale=en-US&per_page=15&page=1";

const getDataImages = async () => {
  try {
    const getData = await fetch(API, options);
    const transformData = await getData.json();
    transformData
      ? (animationLoading.style = "display:none")
      : (animationLoading.style = "display:block");

    console.log(transformData.photos);
    transformData.photos.forEach((dataImage) => {
      console.log(dataImage);
      const card = document.createElement("div");
      card.innerHTML = `
    <div class="card">
    <div class="imgbox">
        <div class="img">
          <img src="${dataImage.src.original}" alt="" class="image-api" loading="lazy">          
        </div>
    </div>
    <div class="details">
        <p class="title">Creador: ${dataImage.photographer}</p>
        <button class="buttonDownloadImage"><a href="${dataImage.src.original}"download>Descargar</a></button>
        <span class="caption">${dataImage.alt}</span>
    </div>
</div>
<br>
    `;
      containerCards.appendChild(card);
    });
  } catch (error) {
    console.log(error);
  }
};

// search image function
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(searchInput.value);
});

//
async function get() {
  const t = await fetch("../api_example.json");
  const d = await t.json();
  // console.log(d)
}
get();