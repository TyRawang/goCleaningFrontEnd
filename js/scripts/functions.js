$(document).ready(function() {
  $('body').on({
      "contextmenu": function(e) {
        
        // log
        console.log("ctx menu button:", e.which);
        
        // ahh, ahh, ahh...you didn't say the magic word. ahh, ahh, ahh...
        alert('Site are copyrighted by Designer');

        // Stop the context menu
        e.preventDefault();
      }
  });
});
document.oncontextmenu = document.body.oncontextmenu = function() {return false;}

	(function($) {
		"use strict";
	
	
	$(document).ready(function() {

	
	
	/*mega menu custon function*/
	$('.dropdown-submenu').hover(function() {
	if ($(window).width() >= 479) {
	var p = $(this);
	var offset = p.offset();
	
	var multiLeft = offset.left;
	var multilevelWidth = $(".multilevel").width();
	var sublevelWidth = $(this).find(".dropdown-menu").width();
	
	var allWidth = multiLeft + multilevelWidth + sublevelWidth;
	
	if ($(window).width() <= allWidth) {
	$(this).find(".dropdown-menu").css("marginLeft", "-" + (multilevelWidth + sublevelWidth) + "px");
	} else {
	$(".dropdown-submenu>.dropdown-menu").css("marginLeft", " ");
	}
	} else {
	$(".dropdown-submenu>.dropdown-menu").css("marginLeft", " ");
	}
	});
	

	/*scroll to top*/
	$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
	$('.scrollup').fadeIn();
	} else {
	$('.scrollup').fadeOut();
	}
	});
	
	$('.scrollup').on("click",function() {
	$("html, body").animate({
	scrollTop: 0
	}, 500);
	return false;
	
	});
	
	
	// /*menu sticky background*/
	// $(window).load(function(){
 //      $("#header, #header2, #header3, #header4, #header5, #header6").sticky({ topSpacing: 0 });
 //    }); 
	
	
	
	// $('.demo-1').percentcircle();

	// $('.demo-2').percentcircle({
	// animate : false,
	// diameter : 100,
	// guage: 3,
	// coverBg: '#fff',
	// bgColor: '#efefef',
	// fillColor: '#242424',
	// percentSize: '15px',
	// percentWeight: 'normal'
	// });

	// $('.demo-3').percentcircle({
	// animate : false,
	// diameter : 100,
	// guage: 3,
	// coverBg: '#fff',
	// bgColor: '#efefef',
	// fillColor: '#DA4453',
	// percentSize: '18px',
	// percentWeight: 'normal'
	// });
	// $('.demo-4').percentcircle({
	// animate : true,
	// diameter : 100,
	// guage: 3,
	// coverBg: '#fd602c',
	// bgColor: '#666666',
	// fillColor: '#fd602c',
	// percentSize: '18px',
	// percentWeight: 'normal'
	// });		
	// $('.demo-5').percentcircle({
	// animate : true,
	// diameter : 100,
	// guage: 3,
	// coverBg: '#fff',
	// bgColor: '#fff',
	// fillColor: '#fd602c',
	// percentSize: '18px',
	// percentWeight: '20px'
	// });	
	// $('.demo-6').percentcircle({
	// animate : true,
	// diameter : 100,
	// guage: 10,
	// coverBg: '#fff',
	// bgColor: '#efefef',
	// fillColor: '#D870A9',
	// percentSize: '18px',
	// percentWeight: 'normal'
	// });	
	
	
	//Based on: https://codepen.io/sharafat_8271/pen/KVWMXP

$('#next1').click(function(){
  $('#stepper1').addClass('step-done');
  $('#stepper1').removeClass('editable-step');
  $('#stepper2').addClass('active-step');
  $('#stepper2').addClass('editable-step');
  activeStep($('#step2'));
});
$('#next2').click(function(){
  $('#stepper2').addClass('step-done');
  $('#stepper2').removeClass('editable-step');
  $('#stepper3').addClass('active-step');
  $('#stepper3').addClass('editable-step');
  activeStep($('#step3'));
});
$('#next3').click(function(){
  $('#stepper3').addClass('step-done');
  $('#stepper3').removeClass('editable-step');
  $('#stepper4').addClass('active-step');
  $('#stepper4').addClass('editable-step');
  activeStep($('#step4'));
});
$('#next4').click(function(){
  $('#stepper4').addClass('step-done');
  $('#stepper4').removeClass('editable-step');
  $('#stepper5').addClass('active-step');
  $('#stepper5').addClass('editable-step');
  activeStep($('#step5'));
});

$('#next5').click(function(){
  $('#stepper5').addClass('step-done');
  $('#stepper5').removeClass('editable-step');
  $('#stepper6').addClass('active-step');
  $('#stepper6').addClass('editable-step');
  activeStep($('#step6'));
});

$('#next6').click(function(){
  $('#stepper6').addClass('step-done');
  $('#stepper6').removeClass('editable-step');
  $('#stepper7').addClass('active-step');
  $('#stepper7').addClass('editable-step');
  activeStep($('#step7'));
});

$('#next7').click(function(){
  $('#stepper7').addClass('step-done');
  $('#stepper7').removeClass('editable-step');
  $('#stepper8').addClass('active-step');
  $('#stepper8').addClass('editable-step');
  activeStep($('#step8'));
});

$('#next8').click(function(){
  $('#stepper8').addClass('step-done');
  $('#stepper8').removeClass('editable-step');
  $('#stepper9').addClass('active-step');
  $('#stepper9').addClass('editable-step');
  activeStep($('#step9'));
});

$('#next9').click(function(){
  $('#stepper9').addClass('step-done');
  $('#stepper9').removeClass('editable-step');
  $('#stepper10').addClass('active-step');
  $('#stepper10').addClass('editable-step');
  activeStep($('#step10'));
});

$('#next10').click(function(){
  $('#stepper10').addClass('step-done');
  $('#stepper10').removeClass('editable-step');
  $('#stepper11').addClass('active-step');
  $('#stepper11').addClass('editable-step');
  activeStep($('#step11'));
});

$('#next11').click(function(){
  $('#stepper11').addClass('step-done');
  $('#stepper11').removeClass('editable-step');
  $('#stepper12').addClass('active-step');
  $('#stepper12').addClass('editable-step');
  activeStep($('#step12'));
});

$('#next12').click(function(){
  $('#stepper12').addClass('step-done');
  $('#stepper12').removeClass('editable-step');
  $('#stepper13').addClass('active-step');
  $('#stepper13').addClass('editable-step');
  activeStep($('#step13'));
});

$('#next13').click(function(){
  $('#stepper13').addClass('step-done');
  $('#stepper13').removeClass('editable-step');
  $('#stepper14').addClass('active-step');
  $('#stepper14').addClass('editable-step');
  activeStep($('#step14'));
});

$('#next14').click(function(){
  $('#stepper14').addClass('step-done');
  $('#stepper14').removeClass('editable-step');
  $('#stepper15').addClass('active-step');
  $('#stepper15').addClass('editable-step');
  activeStep($('#step15'));
});


$('#finish').click(function(){
  $('#stepper15').addClass('step-done');
  $('#stepper15').removeClass('editable-step');
  //DO SOMETHING
});



function activeStep(stepDiv){
  $('.step').addClass('hide');
  stepDiv.removeClass('hide');
}





 $('select').material_select();


var form = $("#example-form");
form.children("div").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
  
    /* Labels */
    labels: {
        cancel: "Cancel?",
        current: "current step:",
        pagination: "Pagination",
        finish: "Finish!!",
        next: "Next >",
        previous: "< Previous",
        loading: "Loading ..."
    },
  
  
    onStepChanging: function (event, currentIndex, newIndex)
    {
        
        return true;
    },
    onFinishing: function (event, currentIndex)
    {
        
        return true;
    },
    onFinished: function (event, currentIndex)
    {
        alert("Submitted!");
    }
});


	
	
	
	
	
	
	
		});
	
	})(jQuery);
