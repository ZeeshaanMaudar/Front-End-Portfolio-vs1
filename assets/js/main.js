$(document).ready(function(){
	// nav-links animation when clicked on
	// clicking on nav-link to change color
	$(".nav-link").on("click", function(){
		$(".nav-link").removeClass("clicked");
		$(this).addClass("clicked");
	})

	// clicking on navbar-brand to change Home nav-link color
	$(".navbar-brand").on("click", function(){
		$(".nav-link").removeClass("clicked");
		$("#logo-btn").addClass("clicked");
	})

	// end of  nav-links animation

	// animate logos in Skills section
	// html5 logo
	$(".HTML5").on("mouseover", function(){
		$(".html5").addClass("animated bounce");
	})

	$(".HTML5").on("mouseout", function(){
		$(".html5").removeClass("animated bounce");
	})

	// css3 logo
	$(".CSS3").on("mouseover", function(){
		$(".css3").addClass("animated flip");
	})

	$(".CSS3").on("mouseout", function(){
		$(".css3").removeClass("animated flip");
	})

	// js logo
	$(".JAVASCRIPT").on("mouseover", function(){
		$(".js").addClass("animated jello");
	})

	$(".JAVASCRIPT").on("mouseout", function(){
		$(".js").removeClass("animated jello");
	})

	// bootstrap logo
	$(".BOOTSTRAP").on("mouseover", function(){
		$(".bootstrap").addClass("animated zoomIn");
	})

	$(".BOOTSTRAP").on("mouseout", function(){
		$(".bootstrap").removeClass("animated zoomIn");
	})

	// jQuery logo
	$(".JQUERY").on("mouseover", function(){
		$(".jQuery").addClass("animated rotateIn");
	})

	$(".JQUERY").on("mouseout", function(){
		$(".jQuery").removeClass("animated rotateIn");
	})

	// end of skills logo animation

	// Smooth Scrolling
	// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// end of smooth scrolling

// make nav-links scroll-aware so they change when scrolled over new section
var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('clicked');
      sections.removeClass('clicked');
      
      $(this).addClass('clicked');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('clicked');


      if($(".navbar-brand").hasClass('clicked')){
      	$(".navbar-brand").removeClass('clicked');
      }
    }
  });
});


// mdb comes with annoying waves effect when buttons and links are involved.
// this  is to remove them.
$(".nav-link").removeClass("waves-effect waves-light");
$(".btn").removeClass("waves-effect waves-light");
});


