$(document).ready(function(){
	$(document).on("click", "form#hit_form input", function() {
	  $.ajax({
	    type: 'POST',
	    url: '/game/player/hit'
	  }).done(function(msg){
	    $("div#game").replaceWith(msg);
	  });
	  return false;
	});
});
