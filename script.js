

/* pyramid example stand alone */

for (var i = 0; i < 10; i++) {
 console.log(build += '#');
 }


/* Half pyramid example as a function */

function pyr(){
     build = '';
for (var i = 0; i < 10; i++) {
 console.log(build += '#');
 }
}




/* FizzBuzz as a function - Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers 
divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.When you have that working,
 modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible 
 by only one of those).

*/

function fizzBuzz(){
for(i=0; i<=100; i++){
	
	if(i % 5 == 0 && i%3 == 0){
  	console.log("FizzBuzz");
	}
	else if(i % 3 == 0){
  	console.log("Fizz");
  	}else if(i % 5 == 0 && i%3 != 0){
	console.log("Buzz");
    }else{
  	console.log(i);
  }
 }
}

// Chess board

// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

//  outer loop handles the lines and the inner loop handles the characters on a line. //

function genChessBoard(){
	for(i=1;i<=8;i++){

	marker = '';	
		if(i%2 === 0){
			marker = '#';
		}else{
			marker = ' ';
		}

	for(j=1; j<=7; j++){
			if(marker[j-1] === "#"){
				marker = marker + ' '
			}else{
				marker = marker + '#'
			}
		}
		console.log(marker);
	}
}













