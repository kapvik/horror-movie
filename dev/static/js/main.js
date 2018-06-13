$(document).ready(function () {
	// Top slider with movie 

	$('.slider-top .js-index-slider').slick({
	  infinite: true,
	  nextArrow: '.slider-top .index-slider__controls-next',
	  prevArrow: '.slider-top .index-slider__controls-prev',
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

	// Bottom slider with movie 

	$('.slider-bottom .js-index-slider').slick({
	  infinite: true,
	  nextArrow: '.slider-bottom .index-slider__controls-next',
	  prevArrow: '.slider-bottom .index-slider__controls-prev',
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