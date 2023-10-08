$(document).ready(function(){
	
	$(".movie-image").hover(function(){
		$(this).find(".play").show();

	},
	function()
	{
		$(this).find(".play").hide();
	});


	$(".blink").focus(function() {
            if(this.title==this.value) {
                this.value = '';
            }
        })
        .blur(function(){
            if(this.value=='') {
                this.value = this.title;                    
			}
		});
	

});
	function openNews(event) {
		 window.location.href="#news";


       event.preventDefault();
       event.stopPropagation(); 
}
window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}

function lightbox_open(event) {
  
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
   lightBoxVideo.src ='videos/' + event.target.id + '.mp4';
  window.scrollTo(0, 0);
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}
	function openToprated(event) {
		 window.location.href="#t";


       event.preventDefault();
       event.stopPropagation(); 
}
	function openMostcommented(event) {
		 window.location.href="#mo";


       event.preventDefault();
       event.stopPropagation(); 
}
function openMostcommented(event) {
		 window.location.href="#mo";


       event.preventDefault();
       event.stopPropagation(); 
}
	function openLatest(event) {
		 window.location.href="#lat";


       event.preventDefault();
       event.stopPropagation(); 
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
