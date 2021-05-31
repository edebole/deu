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
  }, 1000)
}

window.onload = function () {
  const fiveMinutes = 60 * 5
  const display = document.querySelector('#time')
  startTimer(fiveMinutes, display)
}
