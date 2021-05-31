
	//image section 
	var img = document.getElementById("img");
	var fixed_left = 450 ;

	//timer image section
	var timer = document.getElementById("timer");

	//Function for displaying images randomly 
	function random_images(){

		img.style.display="block"; // this line displays the image
		img.style.width = "500px";
		img.style.height = "500px";
		//make the images random
		img.style.backgroundImage= "url(images/trash/img" +  Math.floor(1 + 8 * Math.random())+ ".png";
		//alert();
	}

	//create a random image location within the border of the background image
	function randomImage_location (){

		img.style.position = "relative"; // to set the position of the picture (relative) to the background
		//random location 
		var location_left = Math.floor(Math.random()  * 1024); 
		var location_top = Math.floor(Math.random()) ;
		
		img.style.left = fixed_left + location_left + "px";
		img.style.top  = location_top + "px";
	
	}

	//create the random images  
	function randomImage_box(){

		var time = Math.random();
		time = 1000 * time;

		setTimeout(function () {

			random_images();
			randomImage_location();

			created_time = Date.now(); // set the time from 0 to 5000 milli second (5 seconds)
		}, time);

	}


	document.getElementById("img").onclick = function(){

		img.style.display="none";

		randomImage_box();

	}

	randomImage_box();
