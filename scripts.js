 $(document).ready(function(){
	for(var i = 0; i<256; i++){
    	$('.container').append('<div class="square"></div>');
	}

	$('.square').mouseenter(function() {
        $(this).css('background-color', 'red');
    });

	//when the user clicks the reset button...
	$('.reset').click(function(){
			 $('.square').css('background-color','green'); 
 		     var n=prompt("Please enter squares per side for new grid (0-64)", 16);
			 //if user entered a number...
		     if (!isNaN(Number(n)) && Number(n)<=64 && Number(n)>=0){
				jQuery('.container').html(''); 	//clear all divs 
				for(var i = 0; i< Number(n)*Number(n); i++){
    				$('.container').append('<div class="square"></div>');
				}
				$('.square').width(640/Number(n)); 
				$('.square').height(640/Number(n)); 
				$('.square').mouseenter(function() {
      				  $(this).css('background-color', 'red');
  				});
  		     }
			 else
				alert("Number is not within 0-64"); 
	});

	//when user clicks rainbow button 
	$('.rainbow').click(function(){
		alert("Coming soon!!");
	});

	//when user clicks blackandwhite button 
	$('.bnw').click(function(){
		alert("Coming soon!!");
	});
});
