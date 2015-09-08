$(document).ready(function() {

	$('#btn').click(function(){
		console.log("click listener");
		$('.text').html('');
		var num = document.getElementById("number").value;
		var counter = 1;
		parseInt(num);

		while(counter <= num){
			console.log('while loop');
			
			if((counter % 3 === 0) && (counter % 5 === 0)){
				$('.text').append('<p>FizzBuzz</p>');
			} else if(counter % 5 === 0){
				$('.text').append('<p>Buzz</p>');
			} else if(counter % 3 === 0){
				$('.text').append('<p>Fizz</p>');
			}else{
				$('.text').append('<p>'+counter+'</p>');
			} //end if else

			counter++;
		} //end while loop

	}) //end of .btn click listener
	
});