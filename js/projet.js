
var list = document.getElementById('projects');

var elClick = document.getElementById('p1');
elClick.addEventListener('click', openProj1, false);

function displayBack(){

}

function openProj1(){
	console.log("clicked Proj1");
	var allProj = document.getElementById('projects');
	var details = document.getElementById('p1');
	var p2 = document.getElementById('p2');
	var p3 = document.getElementById('p3');
	var p4 = document.getElementById('p4');
	var p5 = document.getElementById('p5');



	details.className = 'openProject';
	allProj.removeChild(p2);
	allProj.removeChild(p3);
	allProj.removeChild(p4);
	allProj.removeChild(p5);

	displayBack();
}

function back(){

}



/*
console.log("Hey");


var msg = '<h2 id="tit">A framework for IOT</h2>';
function openProject(){

	var projHead = document.getElementById('tit');
	projHead.innerHTML = msg;

}

var elClick = document.getElementById('p1');
elClick.addEventListener('click', openProject, false);

var colors = ['white', 'black', 'custom'];
console.log(colors);
console.log(colors[2]);

var el = document.getElementById('name');
el.textContent = colors[0] + colors[1];

what();
var newOccupation = "bored";

function what(){
	document.write('What?');
}

function writeOccupation(occ){
	var longerOccupation = "super " + occ;
	return longerOccupation;
}

document.write(writeOccupation(newOccupation));

//function as an expression
var area = function(width, height){
	return width*height;
}

document.write("The area of the floor is: " + area(3,4));

//immediately invoked function expression (IIFE) 
//used when only run once
//used in event handlers n shit
//there are more reasons.
var area2 = (function(){
	var width = 5;
	var height = 4;
	document.write(width*height);
}())

//lets create some objects. 
var hotel = {
	name: 'Moss',
	rooms: 100,
	booked: 25,
	gym: true,
	roomtypes: ['twin', 'double', 'suite'],
	checkAvailability: function(){
		return this.rooms-this.booked;
	}
};

console.log(hotel.name);
console.log(hotel.checkAvailability());
console.log(hotel['name']);

//LITERAL NOTATION
var hotel2 = new Object();
hotel2.name = 'Quay';
hotel2.rooms = 40;
hotel2.booked = 25;

hotel2.checkAvailability = function(){
	return hotel2.rooms - hotel2.booked;
};

function Hotel3(name, rooms, booked){
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function(){
		return this.rooms - this.booked;
	};
}

var hot1 = new Hotel3('z', 5, 4);
var hot2 = new Hotel3('y', 500, 1);

var hots = [hot1, hot2];

var str = "hellohellovertigo";
console.log(str.indexOf('t'));
console.log(str.lastIndexOf('l'));

for(var i = 0; i<hots.length; i++){
	console.log(hots[i].name);
}

//add metadata right now! done
*/