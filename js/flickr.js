//User Clicks button
//JS program will get the word on that button
//make a GET request to flickr, sending the search word along
//receive JSON response
//Add a link and an <img> tag to the page

$(document).ready(function() {
	$('button').click(function() {
		$('button').removeClass('selected');
		$(this).addClass('selected');
	});
}); //end ready