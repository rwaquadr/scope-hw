var slideshow = { 
    photoList: ['photo1', 'photo2', 'photo3', 'photo4', 'photo5'], 
 
    currentPhotoIndex: 0, 
 
    nextPhoto: function() { 
        if(this.currentPhotoIndex < this.photoList.length - 1) { 
            this.currentPhotoIndex++; 
            console.log('currentPhoto is: '+ this.photoList[this.currentPhotoIndex]); 
        } else { 
            console.log('End of Slideshow') 
        } 
    }, 
 
    prevPhoto: function() { 
        if(this.currentPhotoIndex > 0) { 
            this.currentPhotoIndex--; 
            console.log('currentPhoto is: ' + this.photoList[this.currentPhotoIndex]); 
        } else { 
            console.log('Start of Slideshow') 
        } 
    }, 
 
    getCurrentPhoto: function() { 
        return this.photoList[this.currentPhotoIndex];  
    }, 
 
    playInterval: null, 
 
    play: function() { 
        var self = this; 
        this.playInterval = setInterval(function(){self.nextPhoto()}, 2000) 
    }, 
 
    pause: function() { 
        clearInterval(this.playInterval);
        
    } 

} 


console.log(slideshow.play());








// function add(){
// 	var a = 'here I am';
// }

// console.log(a); //undefined, a is within the scope of the function

// function getGreeting(name){
// 	var greeting = 'hello';
// 	return greeting + name;
// }

// console.log(getGreeting('Shane'));  //'helloShane'
// console.log(greeting);  //undefined

// for(var i = 0; i < 10; i++){
// 	var x = i;
// }

// console.log(x);


// function greet(name){
// 	greeting = 'hello ';
// 	return greeting + name;
// }

// console.log(greet('Shane'));


// var city = 'New Orleans';

// var greet = function(){
// 	console.log('Hello ' + city);
// }

// function outer(){

// 	var x = 'x';

// 	function inner(){

// 		var y = 'y';
// 		console.log(x);
// 	}

// 	inner();

// console.log(x);
// }

// outer();


// var name = 'shane';

// var greet = function(){

// 	var name = 'Matt';
// 	console.log(name);
// }

// console.log(name);
// console.log(greet(name));


// function outer(){
// 	var a = 'this is a string';
// 	var b = {line: "this is an object"};
// 	console.log(a);
// 	console.log(b.line);
	
// 	function inner(a, b){
// 		var a = 'this is a new string';
// 		var b = {line: "this is a new object"};
// 		console.log(a);
// 		console.log(b.line);

// 	}
	
// 	inner(a, b);
// 	console.log(a);
// 	console.log(b.line);
// }

// outer();

// function sayName(){
// 	console.log(this.name);

// }

// var teacher1 = {
// 	name: 'Assaf',
// 	speak: sayName

// }

// var teacher2 = {
// 	name: 'Shane',
// 	speak: sayName
// }

// teacher1.speak();
// teacher2.speak();


