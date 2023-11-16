let stars = [
    {
        star: "Sirio, ",
        color: "Blanco"
    },
    {
        star: "Canopus, ",
        color: "Amarilla"
    },
    {
        star: "Rigel Kentaurus, ",
        color: "Enanas amarilla y naranja"
    },
];

function initialize() {
    const STAR_FORM = document.getElementById("list-alist");
    STAR_FORM.addEventListener("submit", addnewstar);
    showStars();
}

function addnewstar(event) {
    event.preventDefault();

    const STAR = event.target.star.value;
    const COLOR = event.target.color.value;

    if (STAR == "") {
        console.log("Put a name to your star");
        let STAR_ERROR = document.getElementById("star-error")
        STAR_ERROR.style.visibility = "visible";
    }
    else if (COLOR == "") {
        console.log("Put a color to your star");
        let COLOR_ERROR = document.getElementById("color-error")
        COLOR_ERROR.style.visibility = "visible";
    }
    else {
        stars.push(
            {
                star: STAR + ", ",
                color: COLOR
            },
        )
        showStars();
    }
}

function showStars() {
    const STAR_LIST = document.getElementById("star-list");

    let allstars = "";
    for (let i = 0; i < stars.length; i++) {
        allstars = allstars + `<li>${stars[i].star} ${stars[i].color}
        <button class="delete-star" onclick="deleteStar(${i})">X</button>
        <button class="down-star" onclick="downStar(${i})">▼</button>
        <button class="up-star" onclick="upStar(${i})">▲</button>
        <button class="copy-star" onclick="copyStar(${i})">✬</button></li>`
    }
    STAR_LIST.innerHTML = allstars;
}

function deleteStar(starId) {
    console.log("DEMACIAAA");
    stars.splice(starId, 1);
    showStars();
}

function downStar(starId) {
    console.log("España");
 if(starId==stars.length-1){
    showStars();
 }else{
    const AUX_STAR = stars[starId];
    stars[starId] = stars[starId + 1];
    stars[starId + 1] = AUX_STAR;
    showStars();
 }
}

function upStar(starId) {
    console.log("España");
 if(starId == 0){
    console.log("las liao");
 }else{
    const AUX_STAR = stars[starId];
    stars[starId] = stars[starId - 1];
    stars[starId - 1] = AUX_STAR;
    showStars();
 }
}

function copyStar(starId){
    const AUX_STAR = stars[starId].star + " " + stars[starId].color;
    navigator.clipboard.writeText(AUX_STAR)
  .then(() => {
    console.log('Texto copiado al portapapeles')
  })
  .catch(err => {
    console.error('Error al copiar al portapapeles:', err)
  })

}
initialize();