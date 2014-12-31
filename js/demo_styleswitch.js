
/* this code for demo style chage */

(function ($j) {

  switch_style = {

    onReady: function () {      
      this.switch_style_click();
    },
    
    switch_style_click: function(){
    	$(".styleswitch_box").click(function(){
    		var id = $(this).attr("id");
    		
    		$("#switch_style").attr("href", "css/" + "demo_css/" + id + ".css");    		
    	});
    },
  };

  $j().ready(function () {
	  switch_style.onReady();
  });

})(jQuery);

/* this code for demo style panel slide */

/* Reset Switcher */
$(document).ready(function(){ 

// Style Switcher	
$('.switcher').animate({
left: '-160px'
});

$('.switcher h2 a').click(function(e){
e.preventDefault();
var div = $('.switcher');
console.log(div.css('left'));
if (div.css('left') === '-160px') {
$('.switcher').animate({
  left: '0px'
}); 
} else {
$('.switcher').animate({
  left: '-160px'
});
}
})

		 
});						   

