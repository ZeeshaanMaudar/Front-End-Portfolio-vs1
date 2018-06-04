// Check off Specific Todos by Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});


// click on X to delete todos
$("ul").on("click", "span", function(event){
	// .fadeOut() will fadeOut just the span
	// .parent(),  will select the li
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	// this .stopPropagation stops the bubbling of effects up to the parents element.
	// So after clicking on the span, it wont turn gray too because of the li click above.
	event.stopPropagation();
});


// creating new Todo 
$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		// grabbing new todo text from input
		var todoText = $(this).val();
		// clear the input
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
	}
});

// Toggling the form when clicking on the plus sign
$("#plusIcon").on("click", function(){
	$("input[type='text']").fadeToggle();
});