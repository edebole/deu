// image section
const canvas = document.getElementById('backgroundImage')
const fixedLeft = 450
const TIME_REMAINING = 60 * 5 // 5 min
const HIDDEN_OBJECT_FOUND = 15
const HIDDEN_OBJECT_NOT_FOUND = 10
const numberMaxOfTrash = 8;

let countItemsImg =0;

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

gameRunning();


/* 
  ---------------------------------------------
  ------------------Funciones------------------
  ---------------------------------------------
  ---------------------------------------------
*/


// devuelve un numero entre el min y max
function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// crea dinamicamente un html tag <img>
function createImgElement(){

  var number = randomNumberTrash();
  var img = new Image(100, 100);
  img.id= "img" + number;
  img.src = 'images/trash/img' + number + '.png';
  img.onclick = linkListener;
  randomImageLocation(img);
  canvas.appendChild(img);

}

// onClick de cada imagen
function linkListener() {
  //alert(this.id);
  this.remove()
  countItemsImg--;
}


function randomImageLocation (img) {
  img.style.display = 'block' // this line displays the image
  img.style.position = 'relative' // to set the position of the picture (relative) to the background
  const locationLeft = Math.floor(Math.random() * 900)
  const locationTop = randomNumber(400, 600);
  img.style.left = locationLeft + 'px';
  img.style.top = locationTop  + 'px';
}

// devuelve un numero de 1 a numberMaxOfTrash(8 por ahora img8)
function randomNumberTrash(){
  return randomNumber(1, numberMaxOfTrash);
}