// Model

var number = 0;

// View

function renderCounter() {
	$('h2').html('');

	var source = $('#countly-template').html();
	var template = Handlebars.compile(source);

}

function setup() {
	renderCounter();

	$('#plus1').on('click' , addOne);
	$('#minus1').on('click' , minusOne);
	$('#reset').on('click' , reset);
}

function addOne() {
	number += 1;
}

function minusOne() {
	number -= 1;
}

function reset() {
	number = 0;
}