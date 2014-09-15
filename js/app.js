$(document).ready(function() {
   	/* Add button*/
   	$('button').click(function(){
   	var addItem =$(".box").val();
   	$('<li class="item"></li>').appendTo('#listitems').html('<span>' + addItem + '</span><img class="hover" src="images/x.jpg">');
   	$('.box').val('');
	});

/* Enter button*/
	$(document).keydown(function(event){
	var addItem =$(".box").val();
    if(event.which == 13){
    event.preventDefault();
	$('<li class="item"></li>').appendTo('#listitems').html('<span>' + addItem + '</span><img class="hover" src="images/x.jpg">');
	$('.box').val('');
	}
});
/*Cross off list items*/
$('#listitems').on('click', 'li', function(){$(this).children('span').toggleClass('strike')
});
/*Remove item from list*/
$('#listitems').on('click', '.hover', function(event) {
	event.stopPropagation();
	$(this).parent('li').remove();});
/*Sort Items*/
$(".listitems").sortable({ axis: "y" });
})