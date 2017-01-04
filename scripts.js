 $(document).ready(function(){
	//creates initial 16x16 grid when page is first loaded 
	for(var i = 0; i<256; i++){
    	$('.container').append('<div class="square"></div>');
	}
	$('.square').css('background-color','#fff'); 

	//When mouse enters a div... change the color to grey
	$('.square').mouseenter(function() {
        $(this).css('background-color', '#333');
    });

	//when the user clicks the reset button...
	$('.basic').click(function(){
			 $('.square').css('background-color','#fff'); 
 		     var n=prompt("Please enter squares per side for new grid (0-64)", 16);
			 //if user entered a number...
		     if (!isNaN(Number(n)) && Number(n)<=64 && Number(n)>=0){
				generate(n); 
				//set color to red when mouse enters 
				$('.square').mouseenter(function() {
      				  $(this).css('background-color', '#333');
  				});
  		     }
			 else
				alert("Number is not within 0-64"); 
	});

	//when the user clicks the rainbow button...
	$('.rainbow').click(function(){
			var n=prompt("Please enter squares per side for new grid (0-64)", 16);
		 	//if user entered a number...
		    if (!isNaN(Number(n)) && Number(n)<=64 && Number(n)>=0)
 		    { 
				generate(n); 
				//set square to random color when mouse enters 
				$('.square').mouseenter(function() {
					  //generate random hex color 
					  var colorR = Math.floor((Math.random() * 256));
   					  var colorG = Math.floor((Math.random() * 256));
  					  var colorB = Math.floor((Math.random() * 256));
   					  $(this).css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
  				});
  		     }
			 else
				alert("Number is not within 0-64"); 
	});

	//when user clicks blackandwhite button 
	$('.fadein').click(function(){
		var n=prompt("Please enter squares per side for new grid (0-64)", 16);
		 	//if user entered a number...
		    if (!isNaN(Number(n)) && Number(n)<=64 && Number(n)>=0)
 		    { 
				generate(n); 
				$('.square').mouseenter(function() {
					var bgcolor = $(this).css('background-color');
					//grab first color 
					var R = parseInt(bgcolor.substring(4,7));
					console.log(R); 
					//fade if not black 
					if ( R > 50 ){
						R = R - 50; 
   					    $(this).css("background-color", "rgb(" + R + "," + R + "," + R + ")");
					}
				});
			}
			else 
				alert("Number is not within 0-64"); 
	});

	//this function clears the container and creates a new container on n by n white colored grids 
	function generate(n)
	{
				jQuery('.container').html(''); 	//clear all divs 
				for(var i = 0; i< Number(n)*Number(n); i++){
    				$('.container').append('<div class="square"></div>');
				}
				$('.square').width(640/Number(n)); 
				$('.square').height(640/Number(n)); 
				$('.square').css('background-color','#fff'); 	//set background of all squares to white 
	}
});
