
var $ = jQuery.noConflict();


// Page Loader
$(window).load(function () {
    
    "use strict";
	$('#loader').fadeOut();
});



    // jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    
    "use strict";
    
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 68
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});



// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
	offset: 70
	
});



// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    "use strict";
    $('.navbar-toggle:visible').click();
});
    
    
    
    
    /*----------------------------------------------------*/
    /*	Css3 Transition
    /*----------------------------------------------------*/

        $('*').each(function(){
            if($(this).attr('data-animation')) {
                var $animationName = $(this).attr('data-animation'),
                    $animationDelay = "delay-"+$(this).attr('data-animation-delay');
                $(this).appear (function() {
                    $(this).addClass('animated').addClass($animationName);
                    $(this).addClass('animated').addClass($animationDelay);
                });
            }
        });
    
    

    
    /*--------------------------------------------------*/
    /* Counter*/
    /*--------------------------------------------------*/ 
        

                $('.timer').countTo();

                $('.counter-item').appear(function() {
                    $('.timer').countTo();
                },{accY: -100});
            
        



////------- Testimonials Carousel
	
var testimonial = $("#testimonial-carousel");

testimonial.owlCarousel({
	navigation : true,
	pagination: true,
	slideSpeed : 2500,
	stopOnHover: true,
	autoPlay: 3000,
	singleItem: true,
	transitionStyle : "fade",
	navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
});

	

////------- Pricing Table

$(document).ready(function() {
 
  $(".pricing").owlCarousel({
        pagination: true,
        navigation : false,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
    	singleItem:false,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
        items: 4,
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
 
});


////------- Latest News

$(document).ready(function() {
 
  $(".latest-news").owlCarousel({
        pagination: true,
        navigation : false,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 4000,
    	singleItem:false,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
        items: 3,
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
 
});




// Team Carousel

$(document).ready(function() {
 
  $(".our-team").owlCarousel({
        pagination: true,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
        items: 4,
    	//singleItem:true,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
 
});



////------- Partner/CLients

$(document).ready(function() {
 
  $(".clients").owlCarousel({
        pagination: false,
        navigation : true,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
    	singleItem:false,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
        items: 5,
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
 
});




$ ( function () {

	$(".video").fitVids();
	
});





        // Tab------------------------------


$('#team a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})




/*---------------------------------------------------*/
    /* Progress Bar
    /*---------------------------------------------------*/
    $(document).ready(function($) {
	"use strict";
    
        $('.skill-shortcode').appear(function() {
            $('.progress').each(function(){ 
                $('.progress-bar').css('width',  function(){ return ($(this).attr('data-percentage')+'%')});
            });
        },{accY: -100});
        
        
    });
	
/*---------------------------------------------------*/
    /*	restrictions
    /*---------------------------------------------------*/

//       $(document).ready(function() {
//     // 1. Disable Right-Click (Context Menu)
//     $(document).bind("contextmenu", function(e) {
//         return false;
//     });

//     // 2. Disable F12 and Shortcuts (Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U)
//     $(document).keydown(function(e) {
//         // F12
//         if (e.keyCode == 123) {
//             return false;
//         }
//         // Ctrl+Shift+I (Inspect)
//         if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//             return false;
//         }
//         // Ctrl+Shift+J (Console)
//         if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//             return false;
//         }
//         // Ctrl+U (View Source)
//         if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//             return false;
//         }
//         // Ctrl+S (Save Page)
//         if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
//             return false;
//         }
//     });
// });

//chat button modal restric hide 

(function () {
    const bubbles = document.getElementById('floating-bubbles');
    if (!bubbles) return;

    const observer = new MutationObserver(() => {
        const modalOpen = document.querySelector('.modal.show, .modal[style*="display: block"]');
        bubbles.style.display = modalOpen ? 'none' : 'block';
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true
    });
})();



/*---------------------------------------------------*/
    /*	title change
    /*---------------------------------------------------*/
     window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const baseTitle = "SurveilEyesSolutions";
        let currentSection = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 150) {
            currentSection = section.getAttribute('id');
          }
        });

        document.title = currentSection ? `${baseTitle} | ${currentSection}` : baseTitle;
      });

/*---------------------------------------------------*/
    /*	preloader
    /*---------------------------------------------------*/

    const text = "SurveilEyesSolutions | Hawkeye";
const el = document.getElementById("loading-text");
const preloader = document.getElementById("preloader");

let index = 0;

function typeText() {
    if (index < text.length) {
        el.textContent += text[index++];
        setTimeout(typeText, 150); // typing speed
    } else {
        // TEXT COMPLETED → REMOVE PRELOADER
        setTimeout(() => {
            preloader.style.opacity = "0";

            setTimeout(() => {
                preloader.remove();
            }, 1); // fade-out duration
        }, 0); // tiny pause after completion (optional)
    }
}


typeText();
/* CLOSE MOBILE MENU ON CLICK */
$(document).ready(function () {
    // When a link inside the mobile menu is clicked...
    $('#navbarResponsive .menu li a').click(function() {
        // ...check if the menu is currently visible (open)
        if ($('#navbarResponsive').hasClass('in')) {
            // ...and trigger a click on the toggle button to close it
            $('.navbar-toggler').click();
        }
    });
});