/* globals TIME_REMAINING HIDDEN_OBJECT_FOUND HIDDEN_OBJECT_NOT_FOUND randomImageBox img */
function startTimer (duration, display) {
  let timer = duration; let minutes; let seconds
  setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10)

    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    display.textContent = minutes + ':' + seconds

    if (--timer < 0) {
      timer = duration
    }
    document.getElementById('img').onclick = function () {
      img.style.display = 'none'
      timer += HIDDEN_OBJECT_FOUND
      console.log('objetos encontrado, se aumentaran: ', HIDDEN_OBJECT_FOUND)
      console.log(timer)
      randomImageBox()
    }

    document.getElementById('backgroundImage').onclick = function () {
      timer -= HIDDEN_OBJECT_NOT_FOUND
      console.log('objetos no encontrado, se restaran: ', HIDDEN_OBJECT_NOT_FOUND)
      console.log(timer)
    }
  }, 1000)
}

window.onload = function () {
  const display = document.querySelector('#time')
  startTimer(TIME_REMAINING, display)
}
