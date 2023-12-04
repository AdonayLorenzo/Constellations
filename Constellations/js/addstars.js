let stars = JSON.parse(localStorage.getItem('stars')) || [
  {
    star: "Sirio",
    color: "Blanco"
  },
  {
    star: "Canopus",
    color: "Amarilla"
  },
  {
    star: "Rigel Kentaurus",
    color: "Enanas amarilla y naranja"
  },
];

function initialize() {
  const STAR_FORM = document.getElementById("list-alist");
  STAR_FORM.addEventListener("submit", addNewStar);
  showStars();
}

function addNewStar(event) {
  event.preventDefault();

  const STAR = event.target.star.value;
  const COLOR = event.target.color.value;

  if (STAR == "") {
    console.log("Put a name to your star");
    let STAR_ERROR = document.getElementById("star-error")
    STAR_ERROR.style.visibility = "visible";
  } else if (COLOR == "") {
    console.log("Put a color to your star");
    let COLOR_ERROR = document.getElementById("color-error")
    COLOR_ERROR.style.visibility = "visible";
  } else {
    stars.push(
      {
        star: STAR,
        color: COLOR
      },
    )
    // Guardar las estrellas en el localStorage
    localStorage.setItem('stars', JSON.stringify(stars));
    showStars();
  }
}

function showStars() {
  const STAR_LIST = document.getElementById("star-list");

  let allStars = "";
  for (let i = 0; i < stars.length; i++) {
    allStars += `<li>${stars[i].star} - ${stars[i].color}
          <button class="delete-star" onclick="deleteStar(${i})">X</button>
          <button class="down-star" onclick="downStar(${i})">▼</button>
          <button class="up-star" onclick="upStar(${i})">▲</button>
          <button class="copy-star" onclick="copyStar(${i})">✬</button>
          <button class="update-star" onclick="updateStar(${i})">⚙</button></li>`;
  }
  STAR_LIST.innerHTML = allStars;
}

function deleteStar(starId) {
  console.log("DEMACIAAA");
  stars.splice(starId, 1);
  localStorage.setItem('stars', JSON.stringify(stars));
  showStars();
}

function downStar(starId) {
  console.log("España");
  if (starId == stars.length - 1) {
    showStars();
  } else {
    const AUX_STAR = stars[starId];
    stars[starId] = stars[starId + 1];
    stars[starId + 1] = AUX_STAR;
    localStorage.setItem('stars', JSON.stringify(stars));
    showStars();
  }
}

function upStar(starId) {
  console.log("España");
  if (starId == 0) {
    console.log("las liao");
  } else {
    const AUX_STAR = stars[starId];
    stars[starId] = stars[starId - 1];
    stars[starId - 1] = AUX_STAR;
    localStorage.setItem('stars', JSON.stringify(stars));
    showStars();
  }
}

function copyStar(starId) {
  const AUX_STAR = stars[starId].star + " " + stars[starId].color;
  navigator.clipboard.writeText(AUX_STAR)
    .then(() => {
      console.log('Texto copiado al portapapeles')
    })
    .catch(err => {
      console.error('Error al copiar al portapapeles:', err)
    })
}

function updateStar(starId) {
  const STAR_FORM = document.getElementById("list-form");
  STAR_FORM.elements["star"].value = stars[starId].star;
  STAR_FORM.elements["color"].value = stars[starId].color;
  deleteStar(starId);
}

initialize();