$(document).ready(function() {


	$('#btn').click(function(){
		console.log("click listener");
		$('.text').html('');
		
		//var num = document.getElementById("number").value;

		var num = $("#number").val();

		parseInt(num);

		if(num % 1 != 0 || num < 1){
			alert('Please enter a pretty number that has no decimals and is greater than 0. Make this program happy :)');
		}else{
			calculate(num);
		}

	}) //end of .btn click listener
	
});

function calculate(max){
	var counter = 1;

	while(counter <= max){
			
			if((counter % 3 == 0) && (counter % 5 == 0)){
				//$('.text').append('<p>FizzBuzz</p>');
				append('FizzBuzz');
			} else if(counter % 5 == 0){
				//$('.text').append('<p>Buzz</p>');
				append('Buzz');
			} else if(counter % 3 == 0){
				//$('.text').append('<p>Fizz</p>');
				append('Fizz');
			}else{
				//$('.text').append('<p>'+counter+'</p>');
				append(counter);
			} //end if else

			counter++;
		} //end while loop
};

function append(string){
	return $('.text').append('<p>'+string+'</p>');
}
