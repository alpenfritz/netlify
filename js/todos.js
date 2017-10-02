// Check Off Specific Todos By Clicking
// instead of using 'click' event, use 'on' event for all potential future elements
// need to use 'on' event on 'ul' because should exist when element was created
// 'li' elements not necessarily present when page was created
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event){
	// below 'this' refers to span
	$(this).parent().fadeOut(500,function(){
		// below 'this' refers to parent of span, ie. li
		$(this).remove();
	});
	// stop event bubbling
	event.stopPropagation();
});

// Add Todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabbing new todo text from input
		var todoText = $(this).val();
		// clear input
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

// Toggling the Form
$(".fa-pencil-square-o").click(function(){
	$("input[type='text']").fadeToggle();
});