

$(document).ready(function() {
	$('form').submit(function(evt) {
		evt.preventDefault();
		var $searchTerm = $('#search');
		var $submitButton = $('#submit');

		$searchTerm.prop("disabled", true);
		$submitButton.prop("disabled", true).val("searching....");
		var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var search = $searchTerm.val();
		var flickrOptions = {
			tags: search,
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
			$searchTerm.prop("disabled", false);
			$submitButton.prop("disabled", false).val("Search");
		}
		$.getJSON(flickrAPI, flickrOptions, displayPhotos);
	});
}); //end ready


	
	
