$(document).ready(function() {

	


	$('#portfolio_grid').mixItUp();

	$(".mnu li").click(function(){
		$(".mnu li").removeClass("active");
		$(this).addClass("active");
	});

	

	$(".catalog li").click(function(){
		$(".catalog li").removeClass("active");
		$(this).addClass("active");
	});



	
	
});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});