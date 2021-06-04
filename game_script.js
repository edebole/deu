// Vars
const gallery = document.getElementById('gallery')
const backgroundImage =document.getElementById('backgroundImage')
const TIME_REMAINING = 60 * 5 // 5 min
const HIDDEN_OBJECT_FOUND = 25
const HIDDEN_OBJECT_NOT_FOUND = 20

let countItemsImg =0;



gameState();

/* 
  ---------------------------------------------
  ------------------Funciones------------------
  ---------------------------------------------
  ---------------------------------------------
*/

function gameState() {
  document.getElementById('options_and_time').style.display='none'
  backgroundImage.style.backgroundImage = "url('images/introgame1.png')";  
  agregarBoton(backgroundImage,'Siguiente');

}


function gameOver(){
  document.getElementById('options_and_time').style.display='none'
  backgroundImage.style.backgroundImage = "url('images/gameover-1.jpg')";  
}
// Function for displaying images randomly
function randomImages () {
  // maximo 3 imagenes al mismo tiempo
  if (countItemsImg < 3)
    { 
      countItemsImg++
      createImgElement();
    }
}

// devuelve un numero entre el min y max
function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// crea dinamicamente: <gallery> <div><img/></div> </gallery>
function createImgElement(){
  var newDiv = createDivGallery();
  gallery.appendChild(newDiv)

  var number = randomNumberTrash();
  var img = new Image(100, 100);
  setImgStyle(img,number);

  newDiv.appendChild(img);
}

function createDivGallery(){
  var newDiv = document.createElement("div");
  // Aca se mueve en el grid las posiciones del css 1,27... se pueden repetir las posiciones se podrian sacar las repetidas algunas lista(push,pop)
  newDiv.className='gallery__item gallery__item--' + randomNumber(1,27);
  return newDiv;
}

function setImgStyle(img, n){
  img.id= "img" + n;
  img.src = pathTrash(n);
  img.class="gallery__img";
  img.alt= descriptionTrash(n);
  img.onclick = linkListener;
}

function agregarBoton(htmlID, texto) { 
  var button = document.createElement('button'); 
  button.type = 'button'; 
  button.innerText = texto; 
  // button.classList.add("btn_font");
  //button.classList.add("btn-sm"); 
  button.classList.add("right_bottom")
  button.onclick = paso1;
  htmlID.appendChild(button); 
} 



function paso1(){
  this.remove();
  const display = document.querySelector('#time')
  startTimer(TIME_REMAINING, display)

}
