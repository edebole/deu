/* globals TIME_REMAINING HIDDEN_OBJECT_FOUND HIDDEN_OBJECT_NOT_FOUND randomImageBox img */
// MAIN DEL JUEGO

let timer = TIME_REMAINING;

function startTimer (duration, display) {
  backgroundImage.style.backgroundImage = "url('images/background1-1024.png')";  
  document.getElementById('options_and_time').style.display='block'
  let minutes; let seconds;
  var intervalTimer = setInterval(function () {
    randomImages();
    if (timer == 0){
      clearInterval(intervalTimer);
      deleteAllImg();
      gameOver();
    }
    // condicion de que gano el juego

    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10)

    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    display.textContent = minutes + ':' + seconds

    if (--timer < 0) {
      timer = 0
      
    }

    document.getElementById('backgroundImage').onclick = function () {
      timer -= HIDDEN_OBJECT_NOT_FOUND
      console.log('objetos no encontrado, se restaran: ', HIDDEN_OBJECT_NOT_FOUND)
      console.log(timer)
    }
  }, 1000)
}


  // window.onload = function () {
  //   const display = document.querySelector('#time')
  //   startTimer(TIME_REMAINING, display)
  // }


// linkListener funcion onClick de cada imagen (Basura)
function linkListener() {
  this.remove()
  timer += HIDDEN_OBJECT_FOUND
  console.log('objetos encontrado, se aumentaran: ', HIDDEN_OBJECT_FOUND)
  console.log(timer)
  countItemsImg--;
}

function deleteAllImg(){
  for (var i = 0; i < 8; i++) {
    let img = document.getElementById('img'+i);
    console.log(img);
    if (img != null){ img.remove()}
 }
}