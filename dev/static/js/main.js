$(document).ready(function () {
	// Top slider with movie 

	$('.js-index-slider').slick({
	  infinite: true,
	  nextArrow: '.index-slider__controls-next',
	  prevArrow: '.index-slider__controls-prev',
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
  	  autoplaySpeed: 2000,
  	  responsive: [
  	  	{
	      breakpoint: 1024,
	      settings: {
	        arrows: false,
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        slidesToShow: 1
	      }
	    }
	  ]
	});
});