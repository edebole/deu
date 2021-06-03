// Vars
const gallery = document.getElementById('gallery')
const fixedLeft = 450
const TIME_REMAINING = 60 * 5 // 5 min
const HIDDEN_OBJECT_FOUND = 15
const HIDDEN_OBJECT_NOT_FOUND = 10
const numberMaxOfTrash = 8;

let countItemsImg =0;


// Main
// Game STATE. 
gameRunning();

// Main



/* 
  ---------------------------------------------
  ------------------Funciones------------------
  ---------------------------------------------
  ---------------------------------------------
*/


// Function for displaying images randomly
function randomImages () {
  // maximo 3 imagenes al mismo tiempo
  if (countItemsImg < 3)
    { 
      countItemsImg++
      createImgElement();
    }
}


function gameRunning(){
  // cada 3 seg agrega basura, si es que puede
  setInterval(function(){ 
    randomImages(); 
  }, 3000);
    
}

// devuelve un numero entre el min y max
function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// crea dinamicamente un html tag <img>
function createImgElement(){
  var newDiv = createDivGallery();
  gallery.appendChild(newDiv)

  var number = randomNumberTrash();
  var img = new Image(100, 100);
  setImgStyle(img,number);
  newDiv.appendChild(img);

}

// onClick de cada imagen
function linkListener() {
  this.remove()
  countItemsImg--;
}

// devuelve un numero de 1 a numberMaxOfTrash(8 por ahora img8)
function randomNumberTrash(){
  return randomNumber(1, numberMaxOfTrash);
}

function createDivGallery(){
  var newDiv = document.createElement("div");
  // Aca se mueve en el grid las posiciones del css 1,27... se pueden repetir las posiciones se podrian sacar
  newDiv.className='gallery__item gallery__item--' + randomNumber(1,27);
  return newDiv;
}

function setImgStyle(img, n){
  img.id= "img" + n;
  img.src = 'images/trash/img' + n + '.png';
  img.class="gallery__img";
  img.onclick = linkListener;
}