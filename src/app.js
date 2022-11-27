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
const searchButton = document.querySelector(".search-image");

// API
const API =
  "https://pexelsdimasv1.p.rapidapi.com/v1/search?query=ocean&locale=en-US&per_page=15&page=1";

const getDataImages = async () => {
  try {
    const getData = await fetch(API, options);
    const transformData = await getData.json();

    console.log(transformData.photos);
    transformData.photos.forEach((dataImage) => {
      console.log(dataImage.src.original);

      const card = document.createElement("div");
      card.innerHTML = `
    <div class="card">
    <div class="imgbox">
        <div class="img">
          <img src="${dataImage.src.original}" alt="" class="image-api">
        </div>
    </div>
    <div class="details">
        <h2 class="title">John Doe</h2>
        <span class="caption">Developer</span>
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

async function get() {
  const t = await fetch("../api_example.json");
  const d = await t.json();
  // console.log(d)
}
get();
