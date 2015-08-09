(function ($, Drupal) { 
	Drupal.behaviors.hf_flickr = { 
		attach: function(context, settings) {
			var basePath = Drupal.settings.basePath;
			var pathToTheme = Drupal.settings.pathToTheme;
			var flickID = Drupal.settings.hf_flickr.flickrUserid;
			var flickAPIKEY = Drupal.settings.hf_flickr.flickrApikey;

			if (flickID === false || flickAPIKEY === false) {
				console.log("sorry flickr");				
			}else{
				console.log(" flickr go!");
				$('#my_gallery').flickr({
	          user_id: flickID,
	          api_key: flickAPIKEY,
	          size: "large"
	      });	
			}
		}
	};
})(jQuery, Drupal);