
// $(document).ready(function() {
 $(window).on("load",function() {
// navbar
 	/*-------------- 02. Navbar Shrink -------------------*/
 	$(window).on("scroll",function(){
      if($(this).scrollTop() > 90){
      	$(".navbar").addClass("navbar-shrink");
      }
      else{
      	$(".navbar").removeClass("navbar-shrink");
      }
 	});

    /*----------------- 03. Video Popup -------------------*/
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function(){
       if($(".video-popup").hasClass("open")){
         $(".video-popup").removeClass("open");
         $("#player-1").attr("src","");
       }
       else{
         $(".video-popup").addClass("open");
         if($("#player-1").attr("src")==''){
            $("#player-1").attr("src",videoSrc);
         }
       }
    });
    
// GALLERY CAROUSEL
$('.gallery-carousel').owlCarousel({
  loop:true,
  margin:0,
  autoplay: true,
  responsiveClass:true,
  responsive:{
    0:{
      items:1,
    },
    600:{
      items:2,
    },
    1000:{
      items:4,
    }
  }
});

// scroll to section 
$.scrollIt({
  topOffset: -50
});


});


// video popup