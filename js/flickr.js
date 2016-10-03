//User Clicks button
//JS program will get the word on that button
//make a GET request to flickr, sending the search word along
//receive JSON response
//Add a link and an <img> tag to the page

$(document).ready(function() {
	$('button').click(function() {
		$('button').removeClass('selected');
		$(this).addClass('selected');
		var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var animal = $(this).text();
		var flickrOptions = {
			tags: animal,
			format: "json"
		};
		function displayPhotos(data) {
			var photoHTML = '<ul>';
			$.each(data.items, function (i, photo) {
				photoHTML += '<li class="grid-25 tablet-gris-50">';
				photoHTML += '<a href="' + photo.link + '" class="image">';
				photoHTML += '<img src="' + photo.media.m + '"></a></li>';
			});
			photoHTML += '</ul>';
			$('#photos').html(photoHTML);
		}
		$.getJSON(flickrAPI, flickrOptions, displayPhotos);
	});
}); //end ready