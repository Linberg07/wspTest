$(document).ready(function(){
	$('.spezialize-slider').slick({
		slidesToShow:4,
		slidesToScroll:4,
		dots:true,
		responsive:[{
			breakpoint:1600,
			settings:{
				slidesToShow:3,
				slidesToScroll:3
			}
		},{
			breakpoint:767.98,
			settings:{
				slidesToShow:2,
				slidesToScroll:2
			}
		},{
			breakpoint:520,
			settings:{
				slidesToShow:1,
				slidesToScroll:1
			}
		}]
	});

	setTimeout(function(){
		let max = 0;
		$(".spezialize-slider__info").each(function(){
			if($(this).height()>max){
				max = $(this).height();
			}
		})
		$(".spezialize-slider__info").each(function(){
			$(this).height(max);
		})
		console.log(max);
		$('.spezialize-slider__text').css('flex','1 0 auto');
	},1000);

	$('.header-burger').click(function(){
		$('.burger').addClass('active');
	})
	$('.burder-top__close').click(function(){
		$('.burger').removeClass('active');
	})
	let w = $(window).width();
	if(w<767.98){
		$('.burger-body').append($('.header-list'));
	}else{
		$('.header-bottom .container').append($('.header-list'));
	}
})

$(window).resize(function(){
	let w = $(window).width();
	if(w<767.98){
		$('.burger-body').append($('.header-list'));
	}else{
		$('.header-bottom .container').append($('.header-list'));
	}
})