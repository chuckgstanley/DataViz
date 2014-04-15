/**
 * @author Peterphobia
 */

//This si the iFrame markup for our YouTube video.
 //We got it by selecting the "share" option on the YouTube page...
 //and copy and pasting the embed code. 
 var video = "<iframe width=560' height='315' src='http://www.youtube.com/embed/o2-RXqU4Lg8?html5=1' frameborder='0' allowfullscreen></iframe>";
  
 var moreInfo = {
 	"cycloneInfo":"More info about cyclone",
 	"wonderwheelInfo": "More info about wonder wheel",
 	"parachuteInfo", "More info about parachute";
 	
 }
 //Document ready. When the page laods, set up our navigation
  $(document).ready(function() {
  	setNav();
  });

  
  function setNav() {
  	
 	//This event listener fires when ".cyclone" button is clicked.
 	//It opens our modal window and inserts the video into the ".modal-body" contaienr
  	$(".btn-success").on("click", function(e) {
  		
  		console.log(e);
  		console.log(e.target);
  		
  		var myID - e.target.id;
  		$("#"+myID+"Div").append(moreInfo[myID+"Info"]);
//  		$('#myModal').modal();
  //		$(".modal-body").html(video);
  	});	
  	
 	$(".close").on("click", function() {
 		$(".modal-body").empty();
 	});	
 
 
 	//This event listener fires when the modal window is closed
 	//and removes the "src" attribute from the iframe, thus killing the video
 	$('#myModal').on('hidden.bs.modal', function () {
 		$('#myModal iframe').removeAttr('src');
 	});
 	
  }