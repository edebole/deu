// image section
const img = document.getElementById('img')
const fixedLeft = 450
const TIME_REMAINING = 60 * 5 // 5 min
const HIDDEN_OBJECT_FOUND = 15
const HIDDEN_OBJECT_NOT_FOUND = 10

// Function for displaying images randomly
function randomImages () {
  img.style.display = 'block' // this line displays the image
  img.style.width = '500px'
  img.style.height = '500px'
  // make the images random
  img.style.backgroundImage = 'url(images/trash/img' + Math.floor(1 + 8 * Math.random()) + '.png'
  // alert();
}

// create a random image location within the border of the background image
function randomImageLocation () {
  img.style.position = 'relative' // to set the position of the picture (relative) to the background
  // random location
  const locationLeft = Math.floor(Math.random() * 1024)
  const locationTop = Math.floor(Math.random())

  img.style.left = fixedLeft + locationLeft + 'px'
  img.style.top = locationTop + 'px'
}

// create the random images
function randomImageBox () {
  let time = Math.random()
  time = 1000 * time

  setTimeout(function () {
    randomImages()
    randomImageLocation()

    createdTime = Date.now() // set the time from 0 to 5000 milli second (5 seconds)
  }, time)
}

randomImageBox()
