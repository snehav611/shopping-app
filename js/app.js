$(document).ready(function() {
   	/* Add button*/
   	$('#add').click(function(){
   	var addItem =$(".box").val();
   	$('ol').append(addItem);
   	$('.box').val('');
	});
})

/* Enter button*/
$(document).keydown(function(event){
	var addItem =$(".box").val();
    if(event.which == 13){
    event.preventDefault();
	$('ol').append('li' + addItem);
	$('.box').val('');
	}
});