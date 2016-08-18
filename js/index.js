// Model

var number = 0; //Global variable that we will update throughout the usage of this app. 

// View

function renderCounter() {
	// This is essential. I need these two lines (10 and 11) to connect essentially this index.js file to my Event template 
	// I created in the html? 
	var source = $('#countly-template').html();
	var template = Handlebars.compile(source); 

	var countHtml = template({
		counter: number,
		high: number > 100, //So high is a boolean? Or rather it's a key, whose value is a boolean?
		low: number < 0 //and the same is for low

	});

	$('#counter').html(countHtml) //This is basically to put/insert/update the html in #counter with countHtml that we just created?

}

// Controller 
	// So the controller is the part of the MVC that deals with user inputs? 

function setup() {
	renderCounter();

	// Event listeners

	$('#plus1').on('click' , addOne);
	$('#minus1').on('click' , minusOne);
	$('#reset').on('click' , reset);
}

function addOne() {
	number += 1;
	renderCounter();
}

function minusOne() {
	number -= 1;
	renderCounter();
}

function reset() {
	number = 0;
	renderCounter();
}

$(document).ready(setup);